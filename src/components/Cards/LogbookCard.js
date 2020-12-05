import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Stars from 'simple-rating-stars';
import AppModal from '../AppModal';
import LogbookForm from '../Forms/LogbookForm';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '80ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function LogbookCard2({ routeData, onUpdate }) {
  const classes = useStyles();

  return (
    <List className={`${classes.root}`}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar alt='Climb Avatar' src={routeData.imageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={routeData.climbName}
          secondary={
            <React.Fragment>
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
              >
                {routeData.climbGrade}
              </Typography>
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
              >
                <Stars
                  stars={routeData.userRating}
                  outOf={5}
                  full={'#d4af37'}
                  empty={'#E1F1FF'}
                  stroke={'#369'}
                />
              </Typography>
              {routeData.beta}
            </React.Fragment>
          }
        />
        <AppModal
          className2={'logbookModal'}
          title={'Edit Log Entry'}
          buttonLabel={'Edit'}
          btnColor={'info'}
        >
          <LogbookForm logbookData={routeData} onUpdate={onUpdate} />
        </AppModal>
      </ListItem>
      <Divider variant='inset' component='li' />
    </List>
  );
}

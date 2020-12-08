import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import CardActions from '@material-ui/core/CardActions';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
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

export default function LogbookCard({ routeData, onUpdate, deleteCard }) {
  const classes = useStyles();

  return (
    <List className={`${classes.root}`}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar alt='Climb Avatar' src={routeData.imageUrl} />
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{ variant: 'h5' }}
          primary={routeData.name}
          secondary={
            <React.Fragment>
              <Typography
                component='span'
                variant='body1'
                className={classes.inline}
                color='textPrimary'
              >
                {routeData.grade}
              </Typography>
              <Stars
                stars={routeData.userRating}
                outOf={5}
                full={'#FFDF00'}
                empty={'#FFFFFF'}
                stroke={'#369'}
              />
              {routeData.beta}
            </React.Fragment>
          }
        />
        <CardActions className='buttonToDoContainer mt-3'>
        <AppModal
          className2={'logbookModal'}
          title={'Edit Log Entry'}
          buttonLabel={'Edit'}
          btnColor={'info'}
        >
          <LogbookForm logbookData={routeData} onUpdate={onUpdate} />
        </AppModal>
        <Button size='small' onClick={() => {
          deleteCard(routeData.firebaseKey);
        }}>
        <DeleteTwoToneIcon />
        </Button>
        </CardActions>
      </ListItem>
      <Divider variant='inset' component='li' />
    </List>
  );
}

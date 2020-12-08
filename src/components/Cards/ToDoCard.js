import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import stock4 from '../../helpers/images/stock4.jpg';
import AppModal from '../AppModal';
import LogbookForm from '../Forms/LogbookForm';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function ToDoCard({ routeData, onUpdate, deleteCard }) {
  const classes = useStyles();

  return (
    <Card className={`${classes.root} m-2 toDoCard`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={routeData.imageUrl === '' ? stock4 : routeData.imageUrl}
          title='Contemplative Reptile'
        />
        <CardContent className='toDoBody'>
          <Typography gutterBottom variant='h5' component='h2'>
            {routeData.name}
          </Typography>
          <Typography variant='h6' component='h3'>
            {routeData.grade}
          </Typography>
          <Typography variant='body1' color='primary' component='h6'>
            {routeData.stars}/5 Stars
          </Typography>
          {routeData.area !== undefined ? (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>Area: </b>
              {routeData.area}
            </Typography>
          ) : (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>Area: </b>
              N/A
            </Typography>
          )}
          {routeData.region !== undefined && (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>Region: </b>
              {routeData.region}
            </Typography>
          )}
          {routeData.state !== undefined && (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>State: </b>
              {routeData.state}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions className='buttonToDoContainer'>
        <AppModal
          btnColor={'success'}
          title={'Logbook Entry'}
          buttonLabel={'Add to Logbook'}
        >
          <LogbookForm routeData={routeData} onUpdate={onUpdate} />
        </AppModal>
        <a href={routeData.url} target='_blank' rel='noreferrer'>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </a>
        <Button size='small' onClick={() => {
          deleteCard(routeData.firebaseKey);
        }}>
        <DeleteTwoToneIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

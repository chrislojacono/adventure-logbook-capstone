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
import stock1 from '../../helpers/images/stock1.jpg';
import stock2 from '../../helpers/images/stock2.jpg';
import stock3 from '../../helpers/images/stock3.jpg';
import stock4 from '../../helpers/images/stock4.jpg';
import stock5 from '../../helpers/images/stock5.jpg';
import stock6 from '../../helpers/images/stock6.jpg';
import stock7 from '../../helpers/images/stock7.jpg';
import AppModal from '../AppModal';
import LogbookForm from '../Forms/LogbookForm';
import ClimbDetails from '../Views/ClimbDetails';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function ToDoCard({
  routeData,
  onUpdate,
  deleteCard,
  user,
}) {
  const classes = useStyles();
  const imageArray = [stock1, stock2, stock3, stock4, stock5, stock6, stock7];

  const getRandomImage = () => {
    const image = imageArray[Math.floor(Math.random() * imageArray.length)];
    return image;
  };

  return (
    <Card className={`${classes.root} m-2 toDoCard d-flex flex-column`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={routeData.imageUrl === '' ? getRandomImage() : routeData.imageUrl}
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
      <CardActions className='buttonToDoContainer mt-auto'>
        <AppModal
          btnColor={'outline-success'}
          title={'Logbook Entry'}
          buttonLabel={'Add to Logbook'}
        >
          <LogbookForm routeData={routeData} onUpdate={onUpdate} user={user}/>
        </AppModal>
        <AppModal
          btnColor={'outline-info'}
          title={'Weather/Info'}
          buttonLabel={'Details'}
          className2={'btn btn-md'}
        >
          <ClimbDetails routeData={routeData}/>
        </AppModal>
        <Button
          size='small'
          onClick={() => {
            deleteCard(routeData.firebaseKey);
          }}
        >
          <DeleteTwoToneIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

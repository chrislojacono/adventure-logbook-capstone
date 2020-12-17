import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { addClimb } from '../../helpers/data/ClimbData';
import ClimbAddedToToDo from '../../helpers/AlertMessage';
import AppModal from '../AppModal';
import ClimbDetails from '../Views/ClimbDetails';
import getUid from '../../helpers/data/AuthData';
import stock1 from '../../helpers/images/stock1.jpg';
import stock2 from '../../helpers/images/stock2.jpg';
import stock4 from '../../helpers/images/stock4.jpg';
import stock5 from '../../helpers/images/stock5.jpg';
import stock6 from '../../helpers/images/stock6.jpg';
import stock7 from '../../helpers/images/stock7.jpg';
import stock8 from '../../helpers/images/stock8.jpg';
import stock9 from '../../helpers/images/stock9.jpg';
import stock10 from '../../helpers/images/stock10.jpg';
import stock11 from '../../helpers/images/stock11.jpg';
import stock12 from '../../helpers/images/stock12.jpg';
import stock13 from '../../helpers/images/stock13.jpg';
import stock14 from '../../helpers/images/stock14.jpg';
import stock15 from '../../helpers/images/stock15.jpg';
import stock16 from '../../helpers/images/stock16.jpg';
import stock17 from '../../helpers/images/stock17.jpg';
import stock18 from '../../helpers/images/stock18.jpg';
import stock19 from '../../helpers/images/stock19.png';
import stock20 from '../../helpers/images/stock20.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function ClimbCard({ routeData }) {
  const imageArray = [stock1, stock2, stock4, stock5, stock6, stock7, stock8, stock9, stock10, stock11, stock12, stock13, stock14, stock15, stock16, stock17, stock18, stock19, stock20];

  const getRandomImage = () => {
    const image = imageArray[Math.floor(Math.random() * imageArray.length)];
    return image;
  };

  const getRandomValue = () => (Math.random() * (0.0090 - 0.0010) + 0.0010).toFixed(4);

  const [success, setSuccess] = useState(false);

  // Slightly adjusting the longitude and latitude here so the markers dont pile on top of each other
  const latitudeValue = +parseFloat(routeData.latitude) + +getRandomValue(0.001, 0.009);
  const longitudeValue = +parseFloat(routeData.longitude) + +getRandomValue(0.001, 0.009);

  const userKey = getUid();
  const climbObject = {
    id: routeData.id,
    name: routeData.name,
    imageUrl: routeData.imgMedium,
    grade: routeData.rating,
    stars: routeData.stars,
    type: routeData.type,
    userId: userKey,
    url: routeData.url,
    state: routeData.location[0],
    region: routeData.location[1],
    area: routeData.location[2],
    longitude: longitudeValue,
    latitude: latitudeValue,
  };

  const addEventClick = () => {
    addClimb(climbObject).then(() => {
      setSuccess({
        success: true,
      });
      setTimeout(() => {
        setSuccess(() => false);
      }, 3000);
    });
  };

  const classes = useStyles();

  return (
    <Card className={`${classes.root} m-2 toDoCard d-flex flex-column`}>
      {success ? <ClimbAddedToToDo routeData={routeData}/> : <></>}
      <a href={routeData.url} target='_blank' rel='noreferrer' className='anchors'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            routeData.imgMedium === '' ? getRandomImage() : routeData.imgMedium
          }
          title='Contemplative Reptile'
          component='img'
        />
        <CardContent className='toDoBody'>
          <Typography gutterBottom variant='h5' component='h2'>
            {routeData.name}
          </Typography>
          <Typography variant='body1' component='h3'>
            {routeData.rating}
          </Typography>
          <Typography variant='body2' color='primary' component='h6'>
            {routeData.stars}/5 Stars
          </Typography>
          {routeData.location[2] !== undefined ? (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>Area: </b>
              {routeData.location[2]}
            </Typography>
          ) : (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>Area: </b>
              N/A
            </Typography>
          )}
          {routeData.location[1] !== undefined ? (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>Region: </b>
              {routeData.location[1]}
            </Typography>
          ) : (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>Region: </b>
              N/A
            </Typography>
          )}
          {routeData.location[0] !== undefined ? (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>State: </b>
              {routeData.location[0]}
            </Typography>
          ) : (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>Region: </b>
              N/A
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      </a>
      <CardActions className='buttonToDoContainer d-flex mt-auto justify-content-center'>
        <Button variant="contained" color="primary" onClick={() => {
          addEventClick();
        }}>Add Climb</Button>
        <AppModal
          btnColor={'outline-info'}
          title={`${routeData.name} ${routeData.rating}`}
          buttonLabel={'Details'}
          className2={'btn btn-md'}
        >
          <ClimbDetails routeData={routeData}/>
        </AppModal>
      </CardActions>
    </Card>
  );
}

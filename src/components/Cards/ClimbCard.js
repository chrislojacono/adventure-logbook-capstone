import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import stock1 from '../../helpers/images/stock1.jpg';
import stock2 from '../../helpers/images/stock2.jpg';
import stock3 from '../../helpers/images/stock3.jpg';
import stock4 from '../../helpers/images/stock4.jpg';
import stock5 from '../../helpers/images/stock5.jpg';
import stock6 from '../../helpers/images/stock6.jpg';
import stock7 from '../../helpers/images/stock7.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function ClimbCard({ routeData }) {
  const imageArray = [stock1, stock2, stock3, stock4, stock5, stock6, stock7];

  const getRandomImage = () => {
    const image = imageArray[Math.floor(Math.random() * imageArray.length)];
    return image;
  };

  const classes = useStyles();

  return (
    <Card className={`${classes.root} m-2 toDoCard`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            routeData.imgMedium === '' ? getRandomImage() : routeData.imgMedium
          }
          title='Contemplative Reptile'
        />
        <CardContent className='toDoBody'>
          <Typography gutterBottom variant='h5' component='h2'>
            {routeData.name}
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
      <CardActions className='buttonToDoContainer'>
        <a href={routeData.url} target='_blank' rel='noreferrer'>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

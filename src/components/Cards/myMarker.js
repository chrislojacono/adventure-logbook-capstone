import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '30px 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MyMarker({ routeData }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {routeData.name}
        </Typography>
        <Typography variant='body2' component='p'>
            {routeData.grade}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={routeData.url} target='_blank' rel='noreferrer'>
        <Button size='small'>Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
}

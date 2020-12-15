import React, { useState, useEffect } from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import Button from '@material-ui/core/Button';
import { ApiKeys } from '../../helpers/ApiKeys';
import { getAllLogsOfSpecificClimb } from '../../helpers/data/LogbookData';
import CommentCard from '../Cards/CommentCard';

export default function ClimbDetails({ routeData }) {
  const [userComments, setUserComments] = useState([]);

  useEffect(() => {
    getAllLogsOfSpecificClimb(routeData.id).then((response) => {
      setUserComments(response);
    });
  }, [routeData.id]);

  const { data } = useOpenWeather({
    key: ApiKeys.OpenWeatherKey,
    lat: routeData.latitude,
    lon: routeData.longitude,
    lang: 'en',
    unit: 'imperial', // values are (metric, standard, imperial)
  });
  return (
    <>
    <ReactWeather
      data={data}
      lang="en"
      unitsLabels={{ temperature: 'F', windSpeed: 'Mp/h' }}
      locationLabel={routeData.region}
      showForecast
    />
      <div className='d-flex flex-column w-100'>
        {userComments.length ? userComments.map((comment) => (
          <CommentCard data={comment} key={comment.firebaseKey} />
        )) : (<> </>)}
      </div>
      <div className='m-2'>
        <a href={routeData.url} target='_blank' rel='noreferrer'>
          <Button variant='contained' color='primary'>
            More Info/ Website
          </Button>
        </a>
      </div>
    </>
  );
}

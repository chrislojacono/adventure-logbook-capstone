import React from 'react';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
import { ApiKeys } from '../../helpers/ApiKeys';

export default function ClimbDetails({ routeData }) {
  return (
    <>
      <ReactWeather
        forecast='5days'
        apikey={ApiKeys.OpenWeatherKey}
        type='geo'
        lon={`${routeData.longitude}`}
        lat={`${routeData.latitude}`}
        unit='imperial'
      />
    </>
  );
}

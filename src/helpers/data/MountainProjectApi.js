import axios from 'axios';
import { ApiKeys } from '../ApiKeys';

const getRoutes = (lat, lon, maxDist, maxResults, minDiff, maxDiff) => new Promise((resolve, reject) => {
  axios.get(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${lat}&lon=${lon}&maxDistance=${maxDist}&minDiff=${minDiff}&maxDiff=${maxDiff}&maxResults=${maxResults}&key=${ApiKeys.MountainProjectKey}`).then((response) => {
    resolve(response);
    console.warn(response);
  }).catch((error) => reject(error));
});

export default getRoutes;

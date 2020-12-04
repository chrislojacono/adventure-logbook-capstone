import Geocode from 'react-geocode';
import { ApiKeys } from '../ApiKeys';

const GooglMapSearch = (area) => new Promise((resolve, reject) => {
  Geocode.setApiKey(ApiKeys.GoogleApiKey);
  Geocode.setLanguage('en');
  Geocode.setRegion('es');
  Geocode.enableDebug();
  Geocode.fromAddress(`${area}`).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      const latLongObj = {
        lat,
        lng,
      };
      resolve(latLongObj);
    },
    (error) => {
      reject(error);
    },
  );
});

export default GooglMapSearch;

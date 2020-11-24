import React from 'react';
import Geocode from 'react-geocode';
import ApiKeys from '../helpers/ApiKeys';

const GooglMapSearch = (area) => {
  Geocode.setApiKey(ApiKeys.GoogleApiKey);
  Geocode.setLanguage('en');
  Geocode.setRegion('es');
  Geocode.enableDebug();
  Geocode.fromAddress(`${area}`).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.warn(lat, lng);
    },
    (error) => {
      console.error(error);
    },
  );
};

GooglMapSearch('Leavenworth');
// Get latitude & longitude from address.

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">I am a button</button>
      </div>
    );
  }
}

export default App;

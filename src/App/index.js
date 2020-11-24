import React from 'react';
import Geocode from 'react-geocode';
import ApiKeys from '../helpers/ApiKeys';

Geocode.setApiKey(ApiKeys.GoogleApiKey);
Geocode.setLanguage('en');
Geocode.setRegion('es');

Geocode.enableDebug();

Geocode.fromLatLng('48.8583701', '2.2922926').then(
  (response) => {
    const address = response.results[0].formatted_address;
    console.warn(address);
  },
  (error) => {
    console.error(error);
  },
);
Geocode.fromAddress('Chattanooga').then(
  (response) => {
    const { lat, lng } = response.results[0].geometry.location;
    console.warn(lat, lng);
  },
  (error) => {
    console.error(error);
  },
);

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

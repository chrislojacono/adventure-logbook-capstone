import React from 'react';
import GooglMapSearch from '../helpers/data/MapsApi';

class App extends React.Component {
  state = {
    lattitude: '',
    longitude: '',
  }

  searchTerm = (text) => (
    GooglMapSearch(text).then((response) => {
      this.setState({
        lattitude: response.lat,
        longitude: response.lng,
      });
    })
  )

  render() {
    this.searchTerm('Leavenworth');
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">I am a button</button>
      </div>
    );
  }
}

export default App;

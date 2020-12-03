import React from 'react';
import firebase from 'firebase/app';
import fbConnection from '../../helpers/data/Connection';

fbConnection();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Home</h2>
      </div>
    );
  }
}

export default App;

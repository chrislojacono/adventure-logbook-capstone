import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import { getAllUserClimbs } from './ClimbData';
import getUid from './AuthData';

class Map extends React.Component {
  state = {
    toDoClimbs: [],
    selectedClimb: null,
  };

  componentDidMount() {
    this.loadTheClimbs();
  }

  loadTheClimbs = () => {
    const userId = getUid();
    getAllUserClimbs(userId).then((response) => {
      this.setState({
        toDoClimbs: response,
      });
    });
  };

  render() {
    const { toDoClimbs, selectedClimb } = this.state;
    return (
      <GoogleMap
        defaultZoom={4}
        defaultCenter={{ lat: 36.1627, lng: -86.7816 }}
      >
        {toDoClimbs.map((climb) => (
          <Marker
            key={climb.id}
            position={{ lat: climb.latitude, lng: climb.longitude }}
            onClick={() => {
              this.setState({
                selectedClimb: climb,
              });
            }}
          />
        ))}
        {selectedClimb && (
          <InfoWindow position={{ lat: selectedClimb.latitude, lng: selectedClimb.longitude }} onCloseClick={() => {
            this.setState({
              selectedClimb: null,
            });
          }}>
            <h1>{selectedClimb.name}</h1>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;

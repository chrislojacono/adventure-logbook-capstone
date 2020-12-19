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
import MapCard from '../../components/Cards/MapCard';

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
        defaultCenter={{ lat: 39.809879, lng: -98.556732 }}
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
            <MapCard routeData={selectedClimb}/>
          </InfoWindow>
        )}
      </GoogleMap>

    );
  }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;

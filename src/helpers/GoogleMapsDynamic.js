import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { ApiKeys } from './ApiKeys';

export default class GoogleMapsWrapper extends Component {
  static defaultProps = {
    center: {
      lat: 36.1627,
      lng: -86.7816,
    },
    zoom: 6,
  };

  render() {
    return (
      <div
        style={{ height: '50vh', width: '50%' }}
        className='d-flex justify-content-center ml-auto mr-auto mt-3'
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: ApiKeys.GoogleApiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.children}
        </GoogleMapReact>
      </div>
    );
  }
}

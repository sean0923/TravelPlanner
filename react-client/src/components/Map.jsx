import React from 'react';
// const geolocation = require('./geolocationAPI/geolocation.js');

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    const google = window.google;
    // this.googleChecker = this.googleChecker.bind(this);
    this.renderMap = this.renderMap.bind(this);
  }

  componentDidMount() {
    this.renderMap();
  }

  renderMap() {
    // Potentially Convert Location into lat & long via geolocationAPI

    // geolocation.requestGeolocation(req.body['location'], function(data) {
    // geoCode = data.results[0].geometry.location;
    // get lat & long from geoCode
    // Set as props/state
    // execute the this.map

    console.log('Render Map Coords: ',
      // this.props,
      this.props.location
    );

    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {
        lat: this.props.location.lat,
        lng: this.props.location.lng
      }
    });
  }

  render() {
    const mapStyle = {
      width: 350,
      height: 350,
      flex: 1,
      border: '1px solid black',
      alignItems: 'center'
    };

    return (
      <div>
        <div className="map" ref="map" id="map" style={mapStyle}>
          Map Loading...
        </div>
      </div>

    );
  }
}

Map.defaultProps = {
  // lat: 48.858608,
  // lng: 2.294471,
  location: {
    lat: 48.858608,
    lng: 2.294471
  }
};
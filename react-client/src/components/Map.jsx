import React from 'react';

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
    const coords = { lat: 48.858608, lng: 2.294471 };

    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {
        lat: coords.lat,
        lng: coords.lng
      }
    });
  }

  render() {
    const mapStyle = {
      width: 450,
      height: 450,
      flex: 1,
      border: '1px solid black'
    };

    return (

      <div className="map" ref="map" id="map" style={mapStyle}>
        Map Loading...
      </div>
    );
  }
}
import React from 'react';

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    const google = window.google;
    // this.googleChecker = this.googleChecker.bind(this);
    // this.renderMap = this.renderMap.bind(this);
  }

  // googleChecker() {
  //   if (!window.google) {
  //     setTimeout(this.googleChecker, 100);
  //     console.log("not there yet");
  //   } else {
  //     console.log("we're good to go!!");
  //     this.renderMap();
  //   }
  // }

  // renderMap() {
  //   const coords = { lat: 41.375885, lng: 2.177813 };
  //   // create map instance
  //   new google.maps.Map(document.getElementById('map'), {
  //     zoom: 16,
  //     center: {
  //       lat: coords.lat,
  //       lng: coords.lng
  //     }
  //   });
  // }

  // componentDidMount() {
  //   this.googleChecker();
  // }

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: EIFFEL_TOWER_POSITION,
      zoom: 11
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
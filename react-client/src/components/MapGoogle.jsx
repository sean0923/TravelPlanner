import React from 'react';
// import Markers from './Markers.jsx';

/**
* When selecting 1 place, updated array to just selected
* Click listener - select item on left
Marker Click/unClick
Type: hybrid?
*/

export class MapGoogle extends React.Component {
  constructor(props) {
    super(props);
    const { lat, lng } = this.props.initalCenter;
    this.state = {
      // Change Current Location to Future Destination
      currentLocation: {
        lat: lat,
        lng: lng
      },
      hotel: {},
      attractions: [],
      food: []
    }
  }

  // componentDidUpdate(prevpProps, prevState) {
  //   if (prevProps.google !== this.props.google) {
  //     this.loadMap();
  //   }
  //   if (prevState.currentLocation !== this.state.currentLocation) {
  //     this.recenterMap();
  //   }
  // }

  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }

  /**
  * Usual Google API Map Functions to Create a Map
  */
  loadMap() {
    if (this.props && this.props.google) {
      //Google is available.
      const { google } = this.props;
      const maps = google.maps;

      //Reference to DOM Node on the Page
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let { initialCenter, zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      // Lat & Long should be passed down from before
      const center = new maps.LatLng(lat, lng);

      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom,
        mapTypeId: google.maps.MapTypeId.HYBRID
      });

      this.map = new maps.Map(node, mapConfig);

      //Add Event Listen when Map is Dragged Around
      this.map.addListener('dragend', (evt) => {
        if (centerChangedTimeout) {
          clearTimeout(centerChangedTimeout);
          centerChangedTimeout = null;
        }
        centerChangedTimeout = setTimeout(() => {
          this.props.onMove(this.map);
        }, 0);
      });

    }
  }

  // recenterMap() {
  //   const map = this.map;
  //   const current = this.state.currentLocation;

  //   const google = this.props.google;
  //   const maps = google.maps;
  //   if (map) {
  //     let center = new maps.LatLng(current.lat, current.lng)
  //     map.panTo(center);
  //   }
  // }

  // Want Props of Destination
  // Arrays of Hotel, atttractions, food
  //props.hotels
  //props.attractions
  //props.food

  render() {
    return (
      <div ref='map'>
        Loading Map...
      </div>
    )
  }
}

// Map.propTypes = {
//   google: React.PropTypes.object,
//   zoom: React.PropTypes.number,
//   initialCenter: React.PropTypes.object,
//   centerAroundCurrentLocation: React.PropTypes.bool,
//   onMove: React.PropTypes.func
// };

Map.defaultProps = {
  //Default San Francisco, Zoom @City-Level
  initialCenter: {
    lat: 37.774929,
    lng: -122.4149416
  },
  zoom: 10,
  centerAroundCurrentLocation: false,
  onMove: function() { }
};

export default MapGoogle;

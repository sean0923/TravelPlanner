import React from 'react';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.coords.lat) {
      this.state = {
        coords: {
          lat: 48.858608,
          lng: 2.294471
        }
      };
    } else if (this.props.coords.lat) {
      this.state = {
        coords: {
          lat: this.props.coords.lat,
          lng: this.props.coords.lng
        }
      };
    }
    this.renderMap = this.renderMap.bind(this);
  }

  componentDidMount() {
    this.renderMap();
  }

  renderMap() {
    // console.log(this.state.coords, 'renderMap Location');
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {
        lat: this.state.coords.lat,
        lng: this.state.coords.lng
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.coords !== this.props.coords) {
      // console.log('New Props!', nextProps);
      this.setState({
        coords: {
          lat: nextProps.coords.lat,
          lng: nextProps.coords.lng
        }
      });
    } else {
      console.log('No Change in Props');
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.coords !== this.props.coords) {
      console.log('Will Update', nextProps, nextState);
    }
    this.renderMap();
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
        <div ref="map" id="map" style={mapStyle}>
          Map Loading...
        </div>
      </div>

    );
  }
}

// Default City of Paris
// Map.defaultProps = {
//   city: 'Paris',
//   coords: {
//     lat: 48.858608,
//     lng: 2.294471
//   }
// };
// arrivalLocation: 'Tokyo',
// coords: {
//   lat: 35.6895,
//   lng: 139.6917
// },
// arrivalLocation: 'Paris',
// coords: {
//   lat: 48.858608,
//   lng: 2.294471
// },
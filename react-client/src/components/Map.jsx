import React from 'react';
// import Marker from './Marker.jsx';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        lat: this.props.coords.lat,
        lng: this.props.coords.lng
      },
      saved: this.props.saved,
      attractions: this.props.attractions,
      hotels: this.props.hotels,
      food: this.props.food,
    }
    this.renderMap = this.renderMap.bind(this);
  }

  /**
  * Before the Initial Render, we show a default city with markers
  */
  componentWillMount() {
    if (!this.state.coords.lat) {
      console.log('Invoked');
      this.setState({
        coords: {
          lat: -33.92,
          lng: 151.25
        },
        attractions: [
          ['Bondi Beach', -33.890542, 151.274856, 4],
          ['Coogee Beach', -33.923036, 151.259052, 5],
          ['Cronulla Beach', -34.028249, 151.157507, 3],
          ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
          ['Maroubra Beach', -33.950198, 151.259302, 1]
        ]
      });
    }
  }

  componentDidMount() {
    this.renderMap();
  }

  renderMap() {
    // console.log(this.state.coords, 'renderMap Location');
    this.map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.HYBRID,
      zoom: 11,
      center: {
        lat: this.state.coords.lat,
        lng: this.state.coords.lng
      }
    });

    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    let toPutMarkers = this.state.attractions;

    for (i = 0; i < toPutMarkers.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(toPutMarkers[i][1], toPutMarkers[i][2]),
        map: this.map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(toPutMarkers[i][0]);
          infowindow.open(this.map, marker);
        }
      })(marker, i));
    }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      // console.log('New Props!', nextProps);
      this.setState({
        coords: {
          lat: nextProps.coords.lat,
          lng: nextProps.coords.lng
        },
        saved: nextProps.saved,
        attractions: nextProps.attractions,
        hotels: nextProps.hotels,
        food: nextProps.food
      });
    } else {
      // console.log('No Change in Props');
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
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
          Loading Map...
        </div>
      </div>

    );
  }
}
/**
 *          <Marker
          saved={this.props.saved}
          attractions={this.props.attractions}
          hotels={this.props.hotels}
          food={this.props.food}
        />
        */
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
import React from 'react';

export default class Marker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extra: [
        ['Bondi Beach', -33.890542, 151.274856, 4],
        ['Coogee Beach', -33.923036, 151.259052, 5],
        ['Cronulla Beach', -34.028249, 151.157507, 3],
        ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
        ['Maroubra Beach', -33.950198, 151.259302, 1]
      ],
      hotels: [],
      attractions: [],
      food: []
    };
    this.renderMarker = this.renderMarker.bind(this);
  }

  componentDidMount() {
    this.renderMarker();
  }

  renderMarker() {
    // console.log(this.props, 'marker');
    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    let locations = this.state.extra;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: this.map
      });

      console.log(marker);

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(this.map, marker);
        }
      })(marker, i));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.coords !== this.props.coords) {
      console.log('New Marker Props!', nextProps);
      this.setState({
        hotels: nextProps.hotels,
        attractions: nextProps.attractions,
        food: nextProps.food,
      });
    } else {
      console.log('No Change in Marker Props');
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.coords !== this.props.coords) {
      console.log('Marker Will Update', nextProps, nextState);
    }
    this.renderMarker();
  }

  render() {
    return (
      <div ref="marker" id="marker">
        Markers Loading...
      </div>
    );
  }
}

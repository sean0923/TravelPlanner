import React from 'react';
import MapGoogle from './MapGoogle.jsx';
import Map from './Map.jsx';

export default class MapContainer extends React.Component {

  render() {
    // if (!this.props.loaded) {
    //   return (
    //     <div>Container Loading...</div>
    //   )
    // }
    // const style = {
    //   width: '100vw',
    //   height: '100vh'
    // }
    return (
      <div className="map">
        <Map google={this.props.google}>
        </Map>
      </div>
    )
  }
}

// export default MapContainer;
// export default GoogleApiComponent({
//   apikey: GoogleMapsAPI
// })(Container);

/**
          <MapGoogle google={this.props.google}>
          <Marker />
          <Marker position={pos} />>
        </MapGoogle>
 */

import React from 'react';
import Map from './Map.jsx';

export class MapContainer extends React.Component {
  render() {

    const style = {
      width: '100vw',
      height: '100vh'
    }

    return (
      <div>
        <Map google={this.props.google}>
          <Marker />
          <Marker position={pos} />>
        </Map>
      </div>
    )
  }
}
// Want Props of Destination
// Arrays of Hotel, atttractions, food
//props.hotels
//props.attractions
//props.food

export default MapContainer;
import React from 'react';

class HotelEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: false
    }
  }

  handleHotelClick(hotel, event){
    this.props.handleHotelClick(hotel, event);

  }

  render () {

    return (
      <div  className="itemBorderSean" onClick={(e) => (this.handleHotelClick(this.props.hotel, e))}>
          <div className='avoid-clicksSean'>
            <div className='avoid-clicksSean'><b>{this.props.hotel.name}</b></div>
            <div className='avoid-clicksSean'>{this.props.hotel.location.display_address.join(', ')}</div>
            <div className='avoid-clicksSean'> {this.props.hotel.price}</div>
            <img className='avoid-clicksSean' src={this.props.hotel.image_url} width="150" height = "150"></img>
          </div>
      </div>
    )
  }
}
export default HotelEntry;

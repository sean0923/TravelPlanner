import React from 'react';
import HotelEntry from './HotelEntry.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridListExampleSimple from './GridListExampleSimple.jsx'

const boxGenFile = require('../boxGenerator.js');
const makeBoxWiBoder = boxGenFile.makeBoxWiBoder;
const makeBoxWiNoBoder = boxGenFile.makeBoxWiNoBoder;

class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelClicked: ''
    }
  }
  render () {
    if (this.props.hotels.length > 0) {
      return (
         <div>
           { this.props.hotels.map((hotel,index) => <HotelEntry hotel={hotel} index={index} key={index} handleHotelClick={this.props.handleHotelClick.bind(this)}/>)} 
        </div>
      )
    } else {
      return (
        <div>
          {/* <h3 className = "glyphicon glyphicon-home"></h3> */}
          
          <MuiThemeProvider>
            <GridListExampleSimple />
          </MuiThemeProvider>
        </div>
      )
    }

  }
}

export default Hotel;
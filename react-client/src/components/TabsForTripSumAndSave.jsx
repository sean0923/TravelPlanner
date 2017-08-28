import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';


import SavedTrips from './savedTrips.jsx';
import TripSummary from './TripSummary.jsx';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsForTripSumAndSave extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (value) {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >

        <Tab label="Trip Summary" value="a">
          <div>
             <TripSummary
              departureDate={this.props.departureDate} 
              returnDate={this.props.returnDate} 
              departureLocation={this.props.departureLocation} 
              arrivalLocation={this.props.arrivalLocation} 
              trips={this.props.trips} 
              remove={this.props.remove} 
              save={this.props.save} 
            /> 
          </div>
        </Tab>
        <Tab label="My Trips" value="b">
          <div>
             <SavedTrips
              trips={this.props.trips} 
              remove={this.props.remove} 
              save={this.props.save} 
            /> 
          </div>
        </Tab>
        
      </Tabs>
    );
  }
}
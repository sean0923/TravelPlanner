import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import Flights from './Flights.jsx';
import Hotels from './Hotels.jsx';
import Attractions from './Attraction.jsx';
import FoodList from './FoodList.jsx';

const boxGenFile = require('../boxGenerator.js');
const makeBoxWiBoder = boxGenFile.makeBoxWiBoder;
const makeBoxWiNoBoder = boxGenFile.makeBoxWiNoBoder;

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'b',
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
        <Tab label="Flights" value="a">
          <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <p>
              FlightsFlightsFlightsFlightsFlightsFlightsFlights
              FlightsFlightsFlightsFlightsFlightsFlightsFlights
              FlightsFlightsFlightsFlightsFlightsFlightsFlights
            </p>
          </div>
        </Tab>
        <Tab label="Hotels" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <div style={makeBoxWiBoder('TestRedBox', '100%', '10px', 'red')}></div>
            <Hotels handleHotelClick={this.props.handleHotelClick} hotels={this.props.hotels}/>
          </div>
        </Tab>
        <Tab label="Attractions" value="C">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              AttractionsAttractionsAttractionsAttractions
              AttractionsAttractionsAttractions
            </p>
          </div>
        </Tab>
        <Tab label="Restaurants" value="D">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <FoodList handleFoodItemState={this.props.handleFoodItemState} foodlist={this.props.foodlist}/>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import Flights from './Flights.jsx';
import Hotels from './Hotels.jsx';
import Attractions from './Attraction.jsx';
import FoodList from './FoodList.jsx';

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
            <h2 style={styles.headline}>Controllable Tab A</h2>
            {[...Array(100).keys()].map(() => {
              return ('Trip Summary');
            })}
          </div>
        </Tab>
        <Tab label="My Trips" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            {[...Array(100).keys()].map(() => {
              return ('My Trips');
            })}
          </div>
        </Tab>
        
      </Tabs>
    );
  }
}
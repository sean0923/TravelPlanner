import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

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
        <Tab label="Flights" value="a">
          <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <p>
              FlightsFlightsFlightsFlightsFlightsFlights
              FlightsFlightsFlightsFlightsFlightsFlights
            </p>
          </div>
        </Tab>
        <Tab label="Lodging" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              LodgingLodgingLodgingLodgingLodging
              LodgingLodgingLodgingLodgingLodging
            </p>
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
            <p>
              RestaurantsRestaurantsRestaurantsRestaurants
              Restaurants
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
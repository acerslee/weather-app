import React from 'react';
import WeatherBanner from './components/banner.js';
import WeatherList from './components/weatherList.js';
import cities from './data/cities.js';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      city: 'bayside',
      cities: cities}
  }

  render() {
    return(
      <div>
        <WeatherBanner />
        <WeatherList cities = {this.state.cities}/>
      </div>
    )
  }
};


export default App;
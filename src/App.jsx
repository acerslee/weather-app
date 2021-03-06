import React from 'react';
import WeatherBanner from './components/banner.js';
import 'semantic-ui-css/semantic.min.css'
import Weather from './components/weather.jsx';
import WEATHER_API_KEY from './env/weatherkey.js';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      city: undefined,
      country: undefined,
      desciption: undefined,
      temp: undefined,
      temp_min: undefined,
      temp_max: undefined
     }

     window.navigator.geolocation.getCurrentPosition(this.getWeather, err => console.log(err));

  }
  getWeather = async (position) => {
    //set default lat and long to 0 is user did not accept location service
    if (position.coords.latitude === undefined || position.coords.latitude === undefined) {
      position.coords.latitude = 0;
      position.coords.longitude = 0;
    }

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${WEATHER_API_KEY}&units=imperial`)

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      description: response.weather[0].main,
      temp: response.main.temp,
      temp_min: response.main.temp_min,
      temp_max: response.main.temp_max
    })
  }

  render() {
    return(
      <div className = "main-app">
        <WeatherBanner />
        <Weather
          city = {this.state.city}
          country = {this.state.country}
          description = {this.state.description}
          temp = {this.state.temp}
          temp_min = {this.state.temp_min}
          temp_max = {this.state.temp_max}
        />
    </div>
    )
  }
};


export default App;
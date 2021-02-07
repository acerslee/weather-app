import React from 'react';
import WeatherBanner from './components/banner.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/weather.jsx';
// import WeatherList from './components/weatherList.js';

const API_KEY =  '335c1b71b0b4e57a45517a276ffd94e4';

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

     this.getWeather();

    }



  getWeather = async () => {


    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=imperial`)

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
        />
    </div>
    )
  }
};


export default App;
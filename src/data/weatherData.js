import WEATHER_API_KEY from './weatherKey.js';

// const getWeatherData = () => {
//   const params = new URLSearchParams(window.location.search);

//   const response = 'htttps://api.openweathermap.org/data/2.5/forecast',
//   {
//     params: {
//       q: cityId,
//       appid: WEATHER_API_KEY,
//     }
//   }
// };

const getWeatherData = () => (
  fetch('https://api.openweathermap.org/data/2.5/forecast')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
      },
      (error) => {
        this.setState({
          isLoaded:true,
          error
        });
      }
    )


);

export default getWeatherData;
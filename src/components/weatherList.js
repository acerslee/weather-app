//this will list out weather for the next five days
import WeatherListEntry from './weatherListEntry.js';

const WeatherList = ({cities}) => (
  <div className = "weather-list">
    {cities.map((city) => (
      <WeatherListEntry
        city = {city}
      />
    )
  )}
  </div>
);

export default WeatherList;
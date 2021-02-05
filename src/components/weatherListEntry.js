const WeatherListEntry = ({city}) => (
  <div className = 'weather-one'>
    <div className = 'city-name'>
      <p>{city.city}</p>
    </div>
  </div>
);

export default WeatherListEntry;
const forecast = ({key, query}, callback) => {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=", {
    part: 'snippet',
    key: key,
    q: query,
  })
    .done(({items}) => {
      if (callback) {
        callback (items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) => console.error(err));
    });
};

export default forecast;





// const base = "https://api.openweathermap.org/data/2.5/weather?q=";
// const geoLookup = `${base}/geolookup/q/autoip.json`;

// const getWeatherUrl = (lat, long) => `${base}/forecast/geolookup/conditions/q/${lat},${long}.json`;

// const getLocation = () =>
//   axios.get(geoLookup)
//     .then(rsp => rsp.data.location)
//     .then(location => ({ lat: location.lat, long: location.long}));

// const getData = () =>
//   getLocation()
//     .then(location => axios.get(getWeatherUrl(location.lat, location.long))
//     .then(rsp => rsp.data.current_observation));

// export default getData;
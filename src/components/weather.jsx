import React from 'react';

const Weather = (props) => {
  return (
    <div className = "container">
      <div className = 'cards'>
        <h1>{props.city}, {props.country}</h1>
        <p>{props.description}</p>
        <p>{props.temp}</p>
      </div>
    </div>
  )
}

export default Weather;
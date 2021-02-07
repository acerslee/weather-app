import React from 'react';
import {Icon} from 'semantic-ui-react';


const Weather = (props) => {

  var icon = '';
  //check weather and match with weather icon
  if (props.description === 'Snow') {
    icon = 'snowflake';
  }


  return (
    <div className = "container">
      <div className = 'cards'>
        <h1>{props.city}, {props.country}</h1>
        <a className = 'weather-icon'><Icon name = {icon} /></a>
        <p>{props.description}</p>
        <p>{props.temp}</p>
      </div>
    </div>
  )
}

export default Weather;
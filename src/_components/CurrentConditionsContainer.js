import React, { Component } from 'react'
import getWeatherIcon from '../_functions/getWeatherIcon';
import '../css/CurrentConditionsContainer.css';

export default class CurrentConditionsContainer extends Component {

  render() { 
    if (this.props.current_conditions === "" || this.props.current_conditions === null) {
      return (<div></div>)
    } else {
      return (
        <div className="CurrentConditionsContainer">
          <span 
            className="ForecastIcon" 
            style={{color: this.props.css_style.font_color, filter:`drop-shadow(3px 2px 12px black)`}}>
              {getWeatherIcon(this.props.current_conditions, this.props.is_day)}
          </span>
          <span 
            className="ShortForecastText" 
            style={{color: this.props.css_style.font_color}}>
              {this.props.current_conditions}
            </span>
        </div>
      )
    }
  }
}

import React, { Component } from 'react'
import getWeatherIcon from '../_functions/getWeatherIcon';

import '../css/DailyForecastContainer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrella } from '@fortawesome/free-solid-svg-icons'

export default class DailyForecastContainer extends Component {

  render() {

    return (
        <div className="DailyForecastContainer">
          <div className="tileContainer">
            {this.props.f && this.props.f.map((day, i) => {
              return (         
                <div className='dailyForecastTile' key={i}>
                  <div 
                    className="dailyForecastWeatherIcon"
                    style={{color: this.props.css_style.font_color}}>
                      {getWeatherIcon(day.condition, true)}
                  </div>
                  <div 
                    className="dailyForecastDayOfWeek"
                    style={{color: this.props.css_style.font_color}}>
                      {day.dayOfWeek}
                  </div>
                  <div
                    className="dailyForecastTempContainer"
                    style={{color: this.props.css_style.font_color}}>
                      <span style={{fontSize: "1.7vw"}}>{Math.ceil(day.max_temp)}°</span> <span style={{color: "grey"}}>{Math.floor(day.min_temp)}°</span>
                  </div>
                  <div className="dailyForecastPrecipContainer"
                  style={{color: this.props.css_style.font_color}}>
                    <FontAwesomeIcon icon={faUmbrella}></FontAwesomeIcon> {day.daily_chance_of_rain}% 
                  </div>
                  
                </div>
              )
            })}
          </div>
        </div>
    )
  }
}

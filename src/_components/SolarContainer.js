import React, { Component } from 'react'
import '../css/SolarContainer.css';

export default class SolarContainer extends Component {
  render() {
    return (
        <div className="SolarContainer">
          <div 
            className="SunriseContainer" 
            style={{color: this.props.css_style.font_color}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 348 351">
              <path fill={this.props.css_style.font_color} className="SunUp" d="M348,168l-75.8-41.6L295,48l-81.6,23.8L174,0l-39.3,71.5L54,48l23,78.8L0,169l73,40.1L48,295l82.1-23.9L174,351l43.4-79.1L300,296l-25.5-87.6L348,168z M246.4,176.5c-3.2,3.4-7.6,5.2-12,5.2c-4,0-8.1-1.5-11.2-4.5l-32.8-30.9v96.3c0,9.1-7.3,16.4-16.4,16.4s-16.4-7.3-16.4-16.4v-96.3l-32.8,30.9c-3.2,3-7.2,4.5-11.2,4.5c-4.4,0-8.7-1.7-12-5.2c-6.2-6.6-5.9-17,0.7-23.2l60.5-56.9c0.1-0.1,0.2-0.1,0.3-0.2s0.3-0.3,0.4-0.4c0.1-0.1,0.3-0.2,0.4-0.3c0.2-0.1,0.3-0.2,0.5-0.4c0.1-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.3-0.2,0.4-0.3c0.2-0.1,0.4-0.2,0.5-0.3c0.1-0.1,0.3-0.2,0.4-0.2c0.1-0.1,0.3-0.1,0.4-0.2c0.2-0.1,0.4-0.2,0.6-0.3c0.1-0.1,0.3-0.1,0.4-0.2c0.2-0.1,0.3-0.1,0.5-0.2s0.4-0.2,0.6-0.2c0.1,0,0.3-0.1,0.4-0.1c0.2-0.1,0.3-0.1,0.5-0.1c0.2-0.1,0.4-0.1,0.6-0.2c0.1,0,0.3-0.1,0.4-0.1c0.2,0,0.3-0.1,0.5-0.1s0.4-0.1,0.6-0.1c0.2,0,0.3,0,0.5-0.1c0.2,0,0.3,0,0.5,0s0.4,0,0.6,0c0.2,0,0.4,0,0.5,0s0.2,0,0.2,0c0.1,0,0.2,0,0.2,0c0.2,0,0.4,0,0.5,0c0.2,0,0.4,0,0.6,0c0.2,0,0.3,0,0.5,0s0.3,0,0.5,0.1c0.2,0,0.4,0.1,0.6,0.1c0.2,0,0.3,0.1,0.5,0.1c0.1,0,0.3,0.1,0.4,0.1c0.2,0.1,0.4,0.1,0.6,0.2c0.2,0,0.3,0.1,0.5,0.1c0.1,0,0.3,0.1,0.4,0.1c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0.1,0.3,0.1,0.5,0.2c0.1,0.1,0.3,0.1,0.4,0.2c0.2,0.1,0.4,0.2,0.6,0.3c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0.1,0.4,0.2,0.5,0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.2,0.1,0.3,0.2,0.5,0.4c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.3,0.3,0.4,0.4c0.1,0.1,0.2,0.1,0.3,0.2l60.5,56.9C252.3,159.5,252.6,169.9,246.4,176.5z"></path>
            </svg>
            <div className="SunriseTime">{this.props.solar.sunrise_display}
              <span>{this.props.solar.sunrise_am_pm}</span>
            </div>
          </div>
          <div className="SunsetContainer" style={{color: this.props.css_style.font_color}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 348 351">
              <path fill={this.props.css_style.font_color} className="SunDown" d="M0,183l75.8,41.6L53,303l81.6-23.8L174,351l39.3-71.5L294,303l-23-78.8l77-42.2l-73-40.1L300,56l-82.1,23.9L174,0l-43.4,79.1L48,55l25.5,87.6L0,183z M101.6,174.5c3.2-3.4,7.6-5.2,12-5.2c4,0,8.1,1.5,11.2,4.5l32.8,30.9v-96.3c0-9.1,7.3-16.4,16.4-16.4s16.4,7.3,16.4,16.4v96.3l32.8-30.9c3.2-3,7.2-4.5,11.2-4.5c4.4,0,8.7,1.7,12,5.2c6.2,6.6,5.9,17-0.7,23.2l-60.5,56.9c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0.1-0.3,0.3-0.4,0.4c-0.1,0.1-0.3,0.2-0.4,0.3c-0.2,0.1-0.3,0.2-0.5,0.4c-0.1,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.3,0.2-0.4,0.3c-0.2,0.1-0.4,0.2-0.5,0.3c-0.1,0.1-0.3,0.2-0.4,0.2c-0.1,0.1-0.3,0.1-0.4,0.2c-0.2,0.1-0.4,0.2-0.6,0.3c-0.1,0.1-0.3,0.1-0.4,0.2c-0.2,0.1-0.3,0.1-0.5,0.2s-0.4,0.2-0.6,0.2c-0.1,0-0.3,0.1-0.4,0.1c-0.2,0.1-0.3,0.1-0.5,0.1c-0.2,0.1-0.4,0.1-0.6,0.2c-0.1,0-0.3,0.1-0.4,0.1c-0.2,0-0.3,0.1-0.5,0.1s-0.4,0.1-0.6,0.1c-0.2,0-0.3,0-0.5,0.1c-0.2,0-0.3,0-0.5,0s-0.4,0-0.6,0c-0.2,0-0.4,0-0.5,0s-0.2,0-0.2,0c-0.1,0-0.2,0-0.2,0c-0.2,0-0.4,0-0.5,0c-0.2,0-0.4,0-0.6,0c-0.2,0-0.3,0-0.5,0s-0.3,0-0.5-0.1c-0.2,0-0.4-0.1-0.6-0.1c-0.2,0-0.3-0.1-0.5-0.1c-0.1,0-0.3-0.1-0.4-0.1c-0.2-0.1-0.4-0.1-0.6-0.2c-0.2,0-0.3-0.1-0.5-0.1c-0.1,0-0.3-0.1-0.4-0.1c-0.2-0.1-0.4-0.2-0.6-0.2c-0.2-0.1-0.3-0.1-0.5-0.2c-0.1-0.1-0.3-0.1-0.4-0.2c-0.2-0.1-0.4-0.2-0.6-0.3c-0.1-0.1-0.3-0.1-0.4-0.2c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2-0.1-0.4-0.2-0.5-0.3c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.3-0.2-0.4-0.3c-0.2-0.1-0.3-0.2-0.5-0.4c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.3-0.3-0.4-0.4c-0.1-0.1-0.2-0.1-0.3-0.2l-60.5-56.9C95.7,191.5,95.4,181.1,101.6,174.5z"></path>
            </svg>
            <div className="SunsetTime">{this.props.solar.sunset_display}
              <span>{this.props.solar.sunset_am_pm}</span>
            </div>
          </div>
        </div>
    )
  }
}
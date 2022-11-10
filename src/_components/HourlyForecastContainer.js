import React, { Component } from 'react'

import '../css/HourlyForecastContainer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHigh, faUmbrella, faWind} from '@fortawesome/free-solid-svg-icons'

export default class HourlyForecastContainer extends Component {

  render() {

    return (
        <div className="HourlyForecastContainer">

          <div className='hourlyForecastRow'>
            <div className="hourlyForecastTime hourlyForecastCol">
              <div className="hourlyForecastCol1 hourlyForecastText" style={{color: this.props.css_style.font_color}}>
              </div>
            </div>
            <div className="hourlyForecastTemp hourlyForecastCol">
              <div className="hourlyForecastCol2 hourlyForecastText" style={{color: this.props.css_style.font_color}}>
              <FontAwesomeIcon icon={faTemperatureHigh} /></div>
            </div>
            <div className="hourlyForecastRainPct hourlyForecastCol">
              <div className="hourlyForecastCol3 hourlyForecastText" style={{color: this.props.css_style.font_color}}>
              <FontAwesomeIcon icon={faUmbrella} /></div>
              </div>
            <div className="hourlyForecastWind hourlyForecastCol">
              <div className="hourlyForecastCol4 hourlyForecastText" style={{color: this.props.css_style.font_color}}>
              <FontAwesomeIcon icon={faWind} />
              </div>
            </div>
          </div>

          {this.props.f && this.props.f.map((hour, i) => {
            return (         
              <div className='hourlyForecastRow' key={i}>
                <div className="hourlyForecastTime hourlyForecastCol">
                  <div className="hourlyForecastCol1" style={{color: this.props.css_style.font_color}}>
                    {hour.time}
                  </div>
                </div>
                <div className="hourlyForecastTemp hourlyForecastCol">
                  <div className="hourlyForecastCol2 hourlyForecastText" style={{color: this.props.css_style.font_color}}>
                    {parseInt(hour.temp)}°</div>
                </div>
                <div className="hourlyForecastRainPct hourlyForecastCol">
                  <div className="hourlyForecastCol3 hourlyForecastText" style={{color: this.props.css_style.font_color}}>
                    {hour.chance_of_rain}<span style={{fontSize: ".7em"}}>%</span></div>
                  </div>
                <div className="hourlyForecastWind hourlyForecastCol">
                  <div className="hourlyForecastCol4 hourlyForecastText" style={{color: this.props.css_style.font_color}}>
                    {parseInt(hour.wind_mph)} <span style={{fontSize: ".7em"}}>{hour.wind_dir}</span>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
    )
  }
}

import React, { Component } from 'react'

export default class TempRangeBarContainer extends Component {
  // constructor(props) {
  //   super(props)
  // }
  //style={{color: this.props.style.temp_low_f}}
  render() {  

    return (
      <div className="TempRangeContainer">
        <div className="LowTemp" style={{color: this.props.css_style.temp_min_color}}>
          {this.props.weather.temp_low_f}<span>°</span>
        </div>
        <div className="TempRangeBar" style={{background: this.props.css_style.temp_range_gradient}}></div>
        <div className="HighTemp" style={{color: this.props.css_style.temp_max_color}}>
          {this.props.weather.temp_high_f}<span>°</span>
          </div>
      </div>
    )
  }
}

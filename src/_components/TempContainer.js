import React, { Component } from 'react'
import '../css/TempContainer.css';
import TempRangeBarContainer from './TempRangeBarContainer'


export default class TempContainer extends Component {
  
  render() {
    if (this.props.weather.temp_current_f) {
      return (
        <div className="TempContainer"> 
          <div className="Temperature" style={{color: this.props.css_style.font_color}}>
          {this.props.weather.temp_current_f}<span className="DegreeSymbol">°</span>
          </div>
         
         <TempRangeBarContainer weather={this.props.weather} css_style={this.props.css_style}/>
        </div>
      )
    } else {
      return <div></div>
    }

  }
}

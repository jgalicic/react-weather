import React, { Component } from 'react'
import '../css/TimeContainer.css';

export default class TimeContainer extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div className="TimeContainer" style={{color: this.props.css_style.font_color}}>
        {this.props.time.timeIsLoaded &&        
        <div>
          {this.props.time.display_time}
          {this.props.seconds && <span style={{color: this.props.css_style.font_color}}>:{this.props.time.seconds}</span>}
        </div>
        }
      </div>
    )
  }
}

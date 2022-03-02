import React, { Component } from 'react'
import '../css/DateContainer.css';

export default class DateContainer extends Component {
  render() {
    return (
      <div className="DateContainer">
        <div className="DayOfWeek" style={{color: this.props.css_style.font_color}}>
          {this.props.date.timeIsLoaded && <div>{this.props.date.day_of_week}</div>}
        </div>
        <div className="MonthAndDate" style={{color: this.props.css_style.font_color}}>
          {this.props.date.timeIsLoaded && <div>{this.props.date.month} {this.props.date.day_of_month}</div>}
        </div>
      </div>
    )
  }
}

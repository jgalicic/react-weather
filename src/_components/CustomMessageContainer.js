import React, { Component } from 'react'
import '../css/CustomMessageContainer.css';

export default class CustomMessageContainer extends Component {
  render() {
    return (
      <div className="CustomMessage" style={{color: this.props.css_style.font_color}}>
        {this.props.msg}
      </div>
    )
  }
}

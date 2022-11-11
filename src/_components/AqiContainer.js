import React, { Component } from 'react'
import getRGBforTree from '../_functions/getRGBforTreePollen';
import getRGBforGrass from '../_functions/getRGBforGrassPollen';
import getRGBforWeed from '../_functions/getRGBforWeedPollen';

import '../css/AqiContainer.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadSideMask, faTree, faIcicles, faCertificate, faCannabis  } from '@fortawesome/free-solid-svg-icons'

export default class AqiContainer extends Component {


  render() {
    return (
      <div className="AqiContainer">
        <div className="AqiContainer-HorizontalBar">
          <div className="AqiContainer-LeftInfo">
            <FontAwesomeIcon icon={faHeadSideMask} className="AqiContainer-LeftIcon" style={{color: this.props.css_style.font_color}}/>
            <p className="AqiContainer-LeftText" style={{color: this.props.css_style.font_color}}>AQI</p>
          </div>
          
          <div className="AqiContainer-RightInfo">
            <div className="AqiNumber" style={{color: this.props.css_style.font_color}}>{this.props.aqi.number}</div> 
            <div className="AqiCategory" style={{color: this.props.css_style.font_color}}>{this.props.aqi.category}</div>
          </div>
        </div>
        <div className="AqiContainer-HorizontalBar">
          <div className="AqiContainer-LeftInfo">
            <FontAwesomeIcon icon={faTree} className="AqiContainer-LeftIcon" style={{color: this.props.css_style.font_color}}/>
            <p className="AqiContainer-LeftText" style={{color: this.props.css_style.font_color}}>TREE</p>
          </div>
          
          <div className="AqiContainer-RightInfo">
            <div className="AqiNumber" style={{color: getRGBforTree(this.props.pollen.tree_level)}}>{this.props.pollen.tree_level}</div> 
            <div className="AqiCategory" style={{color: getRGBforTree(this.props.pollen.tree_level)}}>{this.props.pollen.tree_risk}</div>
          </div>
        </div>

        <div className="AqiContainer-HorizontalBar">
          <div className="AqiContainer-LeftInfo">
            <FontAwesomeIcon icon={faIcicles} className="AqiContainer-LeftIcon" style={{color: this.props.css_style.font_color, transform: "rotate(180deg)"}}/>
            <p className="AqiContainer-LeftText" style={{color: this.props.css_style.font_color}}>GRASS</p>
          </div>
          
          <div className="AqiContainer-RightInfo">
            <div className="AqiNumber" style={{color: getRGBforGrass(this.props.pollen.grass_level)}}>{this.props.pollen.grass_level}</div> 
            <div className="AqiCategory" style={{color: getRGBforGrass(this.props.pollen.grass_level)}}>{this.props.pollen.grass_risk}</div>
          </div>
        </div>
        <div className="AqiContainer-HorizontalBar">
          <div className="AqiContainer-LeftInfo">
            <FontAwesomeIcon icon={faCertificate} className="AqiContainer-LeftIcon" style={{color: this.props.css_style.font_color}}/>
            <p className="AqiContainer-LeftText" style={{color: this.props.css_style.font_color}}>WEED</p>
          </div>
          
          <div className="AqiContainer-RightInfo">
            <div className="AqiNumber" style={{color: getRGBforWeed(this.props.pollen.weed_level)}}>{this.props.pollen.weed_level}</div> 
            <div className="AqiCategory" style={{color: getRGBforWeed(this.props.pollen.weed_level)}}>{this.props.pollen.weed_risk}</div>
          </div>
        </div>

      </div>
    )
  }
}

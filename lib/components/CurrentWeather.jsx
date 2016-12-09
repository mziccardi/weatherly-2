import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import _  from 'lodash';

export default class CurrentWeather extends Component {
  constructor() {
    super();
  }
  render(){
      
    let current = this.props.weatherArray ? this.props.weatherArray.current_observation.temp_f : null;
    if(!current){
      return <div></div>
    }
    return(
       <div className ='current-display'>
        It is currently: {current} in {this.props.city}
      </div>
    )
  }
};

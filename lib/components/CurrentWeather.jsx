import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import _  from 'lodash';

export default class CurrentWeather extends Component {
  constructor() {
    super();

  }
  render(){
    let current = this.props.weatherArray ? this.props.weatherArray.current_observation.temp_f : []
    if(!_.isEmpty(current)){
      <div className ='current-display'>
        <span>It is currently:</span> {current} in {this.props.city}
      </div>
    }
    return(
      <div>{current}</div>
    )
  }
};

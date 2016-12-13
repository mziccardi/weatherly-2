import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import _  from 'lodash';

export default class CurrentWeather extends Component {
  render() {
    const current = this.props.weatherArray ?
    this.props.weatherArray.current_observation.temp_f : null;
    if (!current) {
      return <div></div>;
    }
    return (
       <section className ='current-display'>
         <div className='currently'>
        It is currently: 
        </div>
         <span className = 'current-temp'>{ current}&#176;</span>
        in {this.props.city}
      </section>
    );
  }
}

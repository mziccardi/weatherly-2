import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import _  from 'lodash';

export default class DisplayWeather extends Component {
  render() {
    const tenDay = this.props.weatherArray ?
    this.props.weatherArray.forecast.simpleforecast.forecastday : [];
    const tenDayStuff = [];
    if (!_.isEmpty(tenDay)) {
      for (let i = 0; i < tenDay.length; i++) {
        tenDayStuff.push(
          <div className ='tenDay-display'>
          <ul className = 'daily-forecast'>
            <li className ='tenDay-pretty'>{tenDay[i].date.pretty.slice(14)}</li>
            <li className ='tenDay-conditions'>{tenDay[i].conditions}</li>
            <div className = {tenDay[i].icon}></div>
            <li className ='tenDay-high'>HIGH: {tenDay[i].high.fahrenheit}&#176;</li>
            <li className ='tenDay-low'>LOW: {tenDay[i].low.fahrenheit}&#176;</li>
          </ul>
        </div>
      );
      }
    }
    return (
      <div className = 'tenDay-display'>
        { tenDayStuff }
      </div>
    );
  }
}

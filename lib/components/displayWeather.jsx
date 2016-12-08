import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import _  from 'lodash';

export default class DisplayWeather extends Component {
  constructor() {
    super();

  }
  render(){
    let tenDay= this.props.weatherArray ? this.props.weatherArray.forecast.simpleforecast.forecastday :[]
    var tenDayStuff = [];
    if(!_.isEmpty(tenDay)){
    for (var i=0; i<tenDay.length; i++){
        tenDayStuff.push(
          <div className ='tenDay-display'>
          <ul>
            <li className ='tenDay-pretty'>{tenDay[i].date.pretty.slice(14)}</li>
            <li className ='tenDay-conditions'>{tenDay[i].conditions}</li>
            <li className ='tenDay-high'>HIGH: {tenDay[i].high.fahrenheit}</li>
            <li className ='tenDay-low'>LOW: {tenDay[i].low.fahrenheit}</li>
          </ul>
        </div>)
      }
      console.log(tenDayStuff)
      // localStorage.setItem('tenDayStuff', JSON.stringify(tenDayStuff));
    }
    return(
      <div>
        { tenDayStuff }
      </div>
    )
  }
}

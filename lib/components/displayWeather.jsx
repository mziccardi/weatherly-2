import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

export default class DisplayWeather extends Component {
  constructor() {
    super();

  }
  render(){
    let tenDay= this.props.weatherArray ? this.props.weatherArray.forecast.simpleforecast.forecastday :[]
    // debugger
    var htmlStuff = [];
    // for (var i=0; i<tenDay.length; i++){
    // <h1>{tenDay[i].conditions}</h1>
    // }

    return(
      <div>
        { htmlStuff }
      </div>
    )
  }
}

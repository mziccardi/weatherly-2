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
    var htmlStuff = [];
    if(!_.isEmpty(tenDay)){
    for (var i=0; i<tenDay.length; i++){
        htmlStuff.push(
          <div>{tenDay[i].conditions}</div>)



    }
  }


  debugger

    return(
      <div>
        { htmlStuff }
      </div>
    )
  }
}

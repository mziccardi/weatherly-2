import React from 'react';
import { Component } from 'react';
import UserInput from './userInput';
import DisplayWeather from './DisplayWeather'
import CurrentWeather from './CurrentWeather'
const $ = require('jquery');

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      state: '',
      weatherArray: null,
    };
  }

  componentDidMount(){
    let storedStuff =  JSON.parse(localStorage.getItem('stored'))
    console.log(storedStuff)
    debugger
    this.getWeatherLocation(storedStuff.city, storedStuff.state)
}
  //   localStorage.setItem(location, JSON.stringify(storedLocation))
  //   this.getWeatherLocation(storedLocation)
  // }
  //   want to save the most recent state of city and state
  //   save city and state into local storage
  //   on refresh make ajax call with saved city and state

  getWeatherLocation(city, state) {
    let apiUrl = `http://api.wunderground.com/api/1c29b78d45895118/alerts/conditions/forecast10day/hourly10day/q/${state}/${city}.json`
    $.get(apiUrl, (input)=> {
      this.setState({ weatherArray: input})
    });
  }
  setLocation({ city, state}) {
    this.setState({ city, state},
      ()=>localStorage.setItem('stored',JSON.stringify({city,state})))
    this.getWeatherLocation(city, state)

  }

  render() {
    return (
      <section>
        <h1>Welcome To Weatherly</h1>
        <h4>Please enter your City and State</h4>
        <UserInput
          setLocation = {(location) => this.setLocation(location)}
        />
        <CurrentWeather
          city= {this.state.city}
          weatherArray={this.state.weatherArray}
        />
        <DisplayWeather
        weatherArray= {this.state.weatherArray}
        />
      </section>
    );
  }
}

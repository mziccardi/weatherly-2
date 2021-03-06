import React from 'react';
import { Component } from 'react';
import UserInput from './userInput';
import DisplayWeather from './DisplayWeather'
import CurrentWeather from './CurrentWeather'
// import Alert from './Alert'
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
  componentDidMount() {
    const storedStuff = JSON.parse(localStorage.getItem('stored'));
    this.getWeatherLocation(storedStuff.city, storedStuff.state);
    this.setState({ city: storedStuff.city });
  }
  getWeatherLocation(city, state) {
    const apiUrl = `http://api.wunderground.com/api/66ae08c4c30ce38c/alerts/conditions/forecast10day/hourly10day/q/${state}/${city}.json`;
    $.get(apiUrl, (input) => {
      this.setState({ weatherArray: input });

    });
  }
  setLocation({ city, state }) {
    this.setState({ city, state },
      () => localStorage.setItem('stored', JSON.stringify({ city, state })));
    this.getWeatherLocation(city, state);
  }

  render() {

    return (
      <section>
        <h1 className ='header'>Welcome To Weatherly</h1>
        <h4 className = 'welcome-text'>Please enter your City and State</h4>
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
        {/* <Alert
        weatherArray = {this.state.weatherArray}
      /> */}
      </section>
    );
  }
}

import React from 'react';
import { Component } from 'react';
import userInput from './userInput';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weatherArray: [],
    };
  }
  locationSet(e) {
    let userlocation = e.target.value
  this.setState({ location: userlocation })
  }
  render() {
    return (
      <section>
        <h1>Welcome To Weatherly</h1>
        <input
          locationset
          type= 'text'
          className='user-input'
          placeholder='enter a location'
          onChange= {this.locationSet.bind(this)}/>
      </section>
    );
  }
}

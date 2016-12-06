import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

export default class userInput extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
    };
  }
  render() {
    return (
      <div>
        <input
          className ='user-input'
          placeholder ='Please enter a location'/>
      </div>
    );
  }
}

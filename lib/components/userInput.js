import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

export default class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      state: '',
    };
  }
  citySet(e) {
    let city = e.target.value
  this.setState({ city: city })
  }
  stateSet(e){
    let state = e.target.value;
    this.setState({ state : state })
  }
  render() {
    return (
      <div>
        <input
          className='user-city'
          placeholder='Enter City'
          onChange={(e) => this.citySet(e)}
          />
        <input
          className='user-state'
          placeholder='Enter State'
          onChange = {(e) => this.stateSet(e)}
          />
          <button
            className='submit-location'
            onClick={()=>this.props.setLocation(this.state)}
            >Submit</button>
      </div>
    );
  }
}

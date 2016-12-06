import React from 'react';
import {component} from 'react';
import ReactDOM from 'react-dom';



export default class Application extends Component {
  constructor(){
    super();
    this.state= {
      location:''

    }
  }
  render(){
  return (
      <section>
        <h1>This WORKS </h1>
      </section>
    );
  }
}

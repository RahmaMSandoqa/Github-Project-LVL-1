import React, { Component } from 'react';
import 
export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        title: 'Array',
        status: 'Private',
        language: 'HTML'
      },
      {
        id: 2,
        title: 'Object',
        status: 'Public',
        language: 'JavaScript'
      }
    ]
  };
  render() {
    return (
      <div style={{ border: 'black 1px solid' }}>
        <h6>App</h6>
      </div>
    );
  }
}

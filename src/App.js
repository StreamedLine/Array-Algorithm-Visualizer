import React, { Component } from 'react';
import InsertionSort from './state/InsertionSort'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <InsertionSort />
      </div>
    );
  }
}

export default App;
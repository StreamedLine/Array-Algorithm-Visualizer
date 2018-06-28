import React, { Component } from 'react';
import ArrayTracker from './state/ArrayTracker';
import Arr from './containers/Arr';
import logo from './logo.svg';
import './App.css';

const arrayTracker = new ArrayTracker([1,3,2]);
arrayTracker.track([1,2,3,4]);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Arr arr={arrayTracker.prevArr()} prevSnapshot={arrayTracker.prevArr()}/>
        <Arr arr={arrayTracker.arr()} prevSnapshot={arrayTracker.prevArr()}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ArrayTracker from './state/ArrayTracker';
import Arr from './containers/Arr';
import './App.css';

const arrayTracker = new ArrayTracker([1,3,2]);
arrayTracker.track([1,2,3,4]);
arrayTracker.markSorted([0,1])



class App extends Component {
  render() {
    return (
      <div className="App">
        <Arr arr={arrayTracker.previous().arr} prevSnapshot={arrayTracker.previous().arr} sorted={{}}/>
        <Arr arr={arrayTracker.last().arr} prevSnapshot={arrayTracker.previous().arr} sorted={arrayTracker.last().sorted}/>
      </div>
    );
  }
}

export default App;

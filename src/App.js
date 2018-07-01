import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Dashboard from './containers/Dashboard'

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
          <h1>Sorting Visualizer</h1>
          <h2>Visualizing Sorting Algorithms Step by Step</h2>
	      	<Dashboard />
    	  </div>
    	</Router>
    );
  }
}

export default App;
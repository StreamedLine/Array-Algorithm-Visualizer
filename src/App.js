import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Dashboard from './containers/Dashboard'

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	      	<Dashboard />
    	  </div>
    	</Router>
    );
  }
}

export default App;
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import SortAlgorithms from './containers/SortAlgorithms'
import ArrayForm from './components/ArrayForm';


class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	      	<ArrayForm />
	      	<SortAlgorithms />
    	  </div>
    	</Router>
    );
  }
}

export default App;
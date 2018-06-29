import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import {currentArray} from '../state/currentArray';
import InsertionSort from '../components/InsertionSort';

class SortAlgorithms extends React.Component {
	render() {
		return (
			<div>
				<Link to="/insertion">Insertion</Link>
  			<Route path="/insertion" component={InsertionSort} arr={currentArray} />
  		</div>
		)
	}
}

export default SortAlgorithms;
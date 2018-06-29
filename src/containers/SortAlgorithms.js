import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import InsertionSort from '../components/InsertionSort';

class SortAlgorithms extends React.Component {
	render() {
		return (
			<div>
				<Link to="/insertion">Insertion</Link>
  			<Route path="/insertion" component={InsertionSort}/>
  		</div>
		)
	}
}

export default SortAlgorithms;
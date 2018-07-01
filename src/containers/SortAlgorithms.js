import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import InsertionSort from '../components/InsertionSort';
import BubbleSort from '../components/BubbleSort';

class SortAlgorithms extends React.Component {
	render() {
		return (
			<div>
				<Link to="/insertion">Insertion</Link>
				<Link to="/bubble">Bubble</Link>
  			<Route path="/insertion" render={() => <InsertionSort currentArray={this.props.currentArray}/>} />
  			<Route path="/bubble" render={() => <BubbleSort currentArray={this.props.currentArray}/>} />
  		</div>
		)
	}
}

export default SortAlgorithms;
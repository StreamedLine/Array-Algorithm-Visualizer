import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import InsertionSort from '../components/InsertionSort';
import BubbleSort from '../components/BubbleSort';
import QuickSort from '../components/QuickSort';

class SortAlgorithms extends React.Component {
	render() {
		return (
			<div>
				<div className="selectionBar">
					<Link to="/insertion">Insertion</Link>
					<Link to="/bubble">Bubble</Link>
					<Link to="/quicksort">Quicksort</Link>					
				</div>
				
  			<Route path="/insertion" render={() => <InsertionSort currentArray={this.props.currentArray}/>} />
  			<Route path="/bubble" render={() => <BubbleSort currentArray={this.props.currentArray}/>} />
  			<Route path="/quicksort" render={() => <QuickSort currentArray={this.props.currentArray}/>} />

  		</div>
		)
	}
}

export default SortAlgorithms;
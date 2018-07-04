import React from 'react';
import SortAlgorithms from './SortAlgorithms'
import ArrayForm from '../components/ArrayForm';

class Dashboard extends React.Component {
	constructor() {
		super();

		this.state = {
			currentArray: []
		}
	}

	componentDidMount() {
		if (this.state.currentArray.length === 0) {
			this.setState({currentArray: [9,1,3,2,6,0,2,5]})
		}
	}

	updateArray(arr) {
		this.setState({currentArray: arr})

	} 

	render() {
		return (
			<div>
				{false && '//checkbox for allowing duplicates or not'}
		    <SortAlgorithms currentArray={this.state.currentArray} />
		    <ArrayForm updateArray={this.updateArray.bind(this)} />
		  </div>
		)
	}
}

export default Dashboard;
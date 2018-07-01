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
		console.log(this)
		if (this.state.currentArray.length == 0) {
			this.setState({currentArray: [9,1,3,2,6,0,2,5]})
		}
	}

	updateArray(arr) {
		console.log(this)
		this.setState({currentArray: arr})

	} 

	render() {
		return (
			<div>
				<ArrayForm updateArray={this.updateArray.bind(this)} />
		    <SortAlgorithms currentArray={this.state.currentArray} />
		  </div>
		)
	}
}

export default Dashboard;
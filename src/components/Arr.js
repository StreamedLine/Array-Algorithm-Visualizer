import React from 'react';
import Span from '../components/Span'

class Arr extends React.Component {
	styledArr() {
		let arr = this.props.arr.slice(0);
	
		for (var i = 0; i < arr.length; i++) {
			let isSorted = arr[i].sorted;
			let color = '';

			if (arr[i].moved) {
				color = 'orange'
			}

			arr[i] = Span({color, sorted: isSorted, data: arr[i].val, key: i})
		}

		return arr;
	}

	render() {
		const arr = this.styledArr();

		return (
			<div>
				<p>{arr}</p>
			</div>
		)
	}
}

export default Arr;
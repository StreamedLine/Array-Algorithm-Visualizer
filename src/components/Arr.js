import React from 'react';
import Span from '../components/Span'

class Arr extends React.Component {
	styledArr() {
		let arrSnapshot = this.props.arr.slice(0),
				prevSnapshot = this.props.prevSnapshot,
				sorted = this.props.sorted;

		for (var i = 0; i < arrSnapshot.length; i++) {
			let isSorted = sorted[i];
			let color = '';

			if (i >= prevSnapshot.length) {
				color = 'green'
			} else if (prevSnapshot[i] !== arrSnapshot[i]) {
				color = 'orange'
			}

			arrSnapshot[i] = Span({color, sorted: isSorted, data: arrSnapshot[i]})
		}

		return arrSnapshot;
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
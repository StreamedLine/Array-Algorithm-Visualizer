import React from 'react';
import Span from '../components/Span'

class Arr extends React.Component {
	constructor(props) {
		super(props)
	}

	styledArr() {
		let arrSnapshot = this.props.arr.slice(0),
				prevSnapshot = this.props.prevSnapshot;

		for (var i = 0; i < arrSnapshot.length; i++) {
			if (i >= prevSnapshot.length) {
				arrSnapshot[i] = Span({color: 'green', data: arrSnapshot[i]})
			} else if (prevSnapshot[i] != arrSnapshot[i]) {
				arrSnapshot[i] = Span({color: 'orange', data: arrSnapshot[i]})
			}	else {
				arrSnapshot[i] = Span({color: '', data: arrSnapshot[i]})
			}
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
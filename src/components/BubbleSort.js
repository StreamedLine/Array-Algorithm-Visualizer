import React from 'react';
import ArrayTracker from '../state/ArrayTracker';
import Arr from './Arr';

class BubbleSort extends React.Component {
	render() {
		const arrayToSort = this.props.currentArray;

		const trackedArrs = () => {
			let arr = arrayToSort.slice(0);
			const tracker = new ArrayTracker(arr);

			for (let i = arr.length-1; i > 0; i--) {
				for (let j = 0; j < i; j++) {
					if (arr[j] > arr[j+1]) {
						tracker.swap(j, j + 1);
					}
				}
				tracker.markSorted({start: i, end: arr.length});
			}

			tracker.markSorted({start: 0, end: arr.length});
			tracker.updateMap();

			const map = tracker.generateMap();

			const arrs = [];
			for (let i = 0; i < map.length; i++) {
			  arrs.push(<Arr arr={map[i]} key={i} />)
			}

			return arrs
		}

		return (
			<div>
				<h3>Bubble Sort</h3>
				{trackedArrs()}
			</div>
		)
	}
}

export default BubbleSort
import React from 'react';
import ArrayTracker from '../state/ArrayTracker';
import Arr from './Arr';

class SelectionSort extends React.Component {
	render() {
		const arrayToSort = this.props.currentArray;

		const trackedArrs = () => {
			let arr = arrayToSort.slice(0);
			const tracker = new ArrayTracker(arr);

			for (let i = 0; i < arr.length - 1; i++) {
				let smallest = i;
				for (let j = i; j < arr.length; j++) {
					if (arr[j] < arr[smallest]) {
						smallest = j;
					}
				}

				if (smallest != i) {
					tracker.markSorted(i)
					tracker.swap(i, smallest)
				} else {
					tracker.markSorted(i)
					tracker.updateMap()
				}

				
			}

			tracker.markSorted(arr.length-1);
			tracker.updateMap()

			const map = tracker.generateMap();
			const arrs = [];
			for (let i = 0; i < map.length; i++) {
			  arrs.push(<Arr arr={map[i]} key={i} />)
			}

			return arrs
		}

		return (
			<div>
				<h3>Selection Sort</h3>
				{trackedArrs()}
			</div>
		)
	}
}

export default SelectionSort
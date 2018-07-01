import React from 'react';
import ArrayTracker from '../state/ArrayTracker';
import Arr from './Arr';

class InsertionSort extends React.Component {
	render() {
		const arrayToSort = this.props.currentArray;

		const trackedArrs = () => {
			let arr = arrayToSort.slice(0);
			const arrayTracker = new ArrayTracker(arr, true);

			for (var i = 0; i < arr.length; i++) {
			  let currentVal = arr[i];
			  let j = i - 1;
			  while (j >= 0 && arr[j] > currentVal) {
			    arr[j + 1] = arr[j];
			    j -= 1; 
			  }
			  arr[j + 1] = currentVal;
			  arrayTracker.track(arr);
			  arrayTracker.markSorted(`${i}`);
			}

			arrayTracker.markSorted(`${arr.length}`)

			const arrs = [];
			for (let i = 0; i < arrayTracker.count(); i++) {
				let prevSnapshot = i > 0 ? arrayTracker.snapshots[i-1] : arrayTracker.snapshots[i];
			  arrs.push(<Arr arr={arrayTracker.snapshots[i]} prevSnapshot={prevSnapshot} sorted={arrayTracker.sorted[i]} key={i} />)
			}

			return arrs
		}

		return (
			<div>
				<h3>Insertion Sort</h3>
				{trackedArrs()}
			</div>
		)
	}
}

export default InsertionSort
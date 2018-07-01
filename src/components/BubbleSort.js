import React from 'react';
import ArrayTracker from '../state/ArrayTracker';
import Arr from './Arr';

class BubbleSort extends React.Component {
	render() {
		const arrayToSort = this.props.currentArray;

		const trackedArrs = () => {
			let arr = arrayToSort.slice(0);
			const arrayTracker = new ArrayTracker(arr, true);

			for (let i = arr.length-1; i > 0; i--) {
				for (let j = 0; j < i; j++) {
					if (arr[j] > arr[j+1]) {
						let temp = arr[j+1]
						arr[j+1] = arr[j];
						arr[j] = temp;
						arrayTracker.track(arr);
					}
				}
				arrayTracker.markSorted(`-${arr.length-i}`);
			}

			arrayTracker.markSorted(`-${arr.length}`);

			const arrs = [];
			for (let i = 0; i < arrayTracker.count(); i++) {
				let prevSnapshot = i > 0 ? arrayTracker.snapshots[i-1] : arrayTracker.snapshots[i];
			  arrs.push(<Arr arr={arrayTracker.snapshots[i]} prevSnapshot={prevSnapshot} sorted={arrayTracker.sorted[i]} key={i} />)
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
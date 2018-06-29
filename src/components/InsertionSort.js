import React from 'react';
import ArrayTracker from '../state/ArrayTracker';
import Arr from '../containers/Arr';
import Span from './Span';
import {currentArray} from '../state/currentArray';

class InsertionSort extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			arr: props.arr
		}
	}


	render() {
		const arrayToSort = this.state.arr || currentArray;

		const trackedArrs = () => {
			const arrayTracker = new ArrayTracker(arrayToSort, true);

			let arr = arrayTracker.last().arr.slice(0);
			arrayTracker.track(arr);

			for (var i = 0; i < arr.length; i++) {
			  let currentVal = arr[i];
			  let j = i - 1;
			  while (j >= 0 && arr[j] > currentVal) {
			    arr[j + 1] = arr[j];
			    j = j - 1; 
			  }
			  arr[j + 1] = currentVal;
			  arrayTracker.track(arr.slice(0));
			  arrayTracker.markSorted(`${i}`);
			}

			arrayTracker.markSorted(`${arr.length}`)

			const arrs = [];
			for (let i = 0; i < arrayTracker.count(); i++) {
				let prevSnapshot = i > 0 ? arrayTracker.snapshots[i-1] : arrayTracker.snapshots[i];
			  arrs.push(<Arr arr={arrayTracker.snapshots[i]} prevSnapshot={prevSnapshot} sorted={arrayTracker.sorted[i]}/>)
			}

			return arrs
		}

		return (
			<div>
				{trackedArrs()}
			</div>
		)
	}
}

export default InsertionSort
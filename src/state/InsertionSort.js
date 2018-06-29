import React from 'react';
import ArrayTracker from './ArrayTracker';
import Arr from '../containers/Arr';
import Span from '../components/Span'

class InsertionSort extends React.Component {
	render() {
		const trackedArrs = () => {
			const arrayTracker = new ArrayTracker([9,1,3,2,6,0,2,5], true);

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
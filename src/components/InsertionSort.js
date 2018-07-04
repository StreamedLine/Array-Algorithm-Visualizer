import React from 'react';
import ArrayTracker from '../state/ArrayTracker';
import Arr from './Arr';

class InsertionSort extends React.Component {
	render() {
		const arrayToSort = this.props.currentArray;

		const trackedArrs = () => {
			let arr = arrayToSort.slice(0);
			const tracker = new ArrayTracker(arr);

			for (var i = 0; i < arr.length; i++) {
			  tracker.putInTemp(arr[i], i)
			  let j = i - 1;
			  
			  while (j >= 0 && arr[j] > tracker.temp.val) {
			    tracker.shiftRight(j)
			    j -= 1; 
			  }
			  
			  if (i > 0) {tracker.markSorted(i - 1) }
			  tracker.putTemp(j+1); 
			}

			const map = tracker.generateMap();
			console.log(map)
			const arrs = [];
			for (let i = 0; i < map.length; i++) {
			  arrs.push(<Arr arr={map[i]} key={i} />)
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
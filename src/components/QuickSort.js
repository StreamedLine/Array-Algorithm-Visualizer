import React from 'react';
import ArrayTracker from '../state/ArrayTracker';
import Arr from './Arr';

class QuickSort extends React.Component {
	render() {
		const arrayToSort = this.props.currentArray;

		const trackedArrs = () => {
			let arr = arrayToSort.slice(0);
			const tracker = new ArrayTracker(arr);

			function swap(left, right) {
				// if (left === right) {return }
				
				tracker.swap(left, right)
			}

			function partition(left, right) {
				
				let pivot = right;

				right -= 1;
				while (true) {
					while (arr[left] < arr[pivot]) {
						left += 1
					}

					while (arr[right] >= arr[pivot]) {
						right -= 1
					}

					if (left >= right) {
						break
					} else {
						swap(left, right)
					}

				}


				swap(left, pivot)
				
				tracker.markSorted(left);
				return left
			}

			function quickSort(left, right) {		
				console.log(left, right, arr.length)
				if (right - left <= 0) {
					return
				}
				let pivot = partition(left, right);

				quickSort(left, pivot - 1);
				quickSort(pivot + 1, right);
			}

			quickSort(0, arr.length-1);
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
				<h3>Quick Sort</h3>
				{trackedArrs()}
			</div>
		)
	}
}

export default QuickSort




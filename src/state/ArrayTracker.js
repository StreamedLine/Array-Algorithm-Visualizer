function isIterable(obj) {
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}


class ArrayTracker {
	constructor(arr, avoidDuplicates) {
		this.avoidDuplicates = avoidDuplicates;
		this.snapshots = [];
		this.sorted = [];
		this.snapshots.push(arr.slice(0));
		this.sorted.push({})
	}

	track(arr) {
		arr = arr.slice(0)
		let sorted = {};

		//avoid duplicates
		if (this.avoidDuplicates && arr.length == this.last().arr.length) {

			let arr1 = arr.slice(0);
			let arr2 = this.last().arr.slice(0);
			while (arr1.length > 0 && arr1[0] == arr2[0]) {
				arr1.shift();
				arr2.shift();
			}
			if (arr1.length == 0) {return }
		}

		if (Object.keys(sorted).length == 0) {
			let lastSort = this.last().sorted;
			for (let k in lastSort) {
				sorted[k] = true;
			}
		}

		this.snapshots.push(arr);
		this.sorted.push(sorted);
	}

	last() {
		let index = this.snapshots.length - 1;
		return {arr: this.snapshots[index], sorted: this.sorted[index]};
	}

	previous() {
		let index = this.snapshots.length - 2;
		return {arr: this.snapshots[index], sorted: this.sorted[index]};
	}

	count() {
		return this.snapshots.length;
	}

	history() {
		return this.snapshots
	}

	markSorted(index) {
		let arrIndex = this.snapshots.length - 1;
		
		if (typeof index === 'string') {
			let arr = [];
			let marker = parseInt(index);
			
			if (marker < 0) {
				let length = this.last().arr.length;
				marker = length - Math.abs(marker);

				for (let i = marker; i < length; i++) {
					arr.push(i);
				}
			} else {
				for (let i = 0; i < marker; i++) {
					arr.push(i);
				}
			}

			index = arr;
		} 

		if (isIterable(index)) {
			for (let i of index) {
				this.sorted[arrIndex][i] = true
			}
		} else {
			this.sorted[arrIndex][index] = true
		}
	}

	sorted() {
		return this.sorted;
	}
}

export default ArrayTracker
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
		this.snapshots.push(arr.slice(0));
		this.sorted.push({})
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
			for (let i = 0; i < parseInt(index); i++) {
				arr.push(i);
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
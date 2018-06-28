function isIterable(obj) {
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}


class ArrayTracker {
	constructor(arr) {
			this.snapshots = [arr];
			this.sorted = [{}];
	}

	track(arr) {
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

	history() {
		return this.snapshots
	}

	markSorted(index) {
		let arrIndex = this.snapshots.length - 1;
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
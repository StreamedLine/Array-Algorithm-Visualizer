class ArrayTracker {
	constructor(arr) {
			this.snapshots = [arr]
	}

	track(arr) {
		this.snapshots.push(arr.slice(0))
	}

	arr() {
		return this.snapshots[this.snapshots.length-1];
	}

	prevArr() {
		return this.snapshots[this.snapshots.length-2];
	}

	history() {
		return this.snapshots
	}
}

export default ArrayTracker
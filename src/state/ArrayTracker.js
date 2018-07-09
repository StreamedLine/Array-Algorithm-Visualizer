function ArrPosition(val, i) {
	this.index = i;
	this.prevIndex = null;
	this.val = val;
	this.history = [{index: i, moved: false}];
	this.sorted = false;
	this.isTemp = false
}

class ArrayTracker {
	constructor(arr, avoidDuplicates) {
		this.avoidDuplicates = avoidDuplicates;
		this.ordered = arr.map((val, i) => {return new ArrPosition(val, i) });
		this.sorted = {};
		this.step = 0;
		this.arr = arr;
		this.temp = null;
	}

	putInTemp(val, i) {
		this.temp = this.ordered[i];
	}

	swap(i, j) {
		let temp = this.ordered[i];
		this.ordered[i] = this.ordered[j];
		this.ordered[j] = temp;

		this.ordered[i].prevIndex = this.ordered[i].index;
		this.ordered[i].index = i
		this.ordered[j].prevIndex = this.ordered[j].index;
		this.ordered[j].index = j
		
		this.arr[i] = this.ordered[i].val;
		this.arr[j] = this.ordered[j].val;
		this.updateMap()
	}

	shiftRight(i) {
		this.ordered[i + 1] = this.ordered[i];
		this.ordered[i + 1].prevIndex = i;
		this.ordered[i + 1].index = i + 1;
		this.arr[i + 1] = this.arr[i];
	}

	shiftLeft(i) {
		this.ordered[i - 1] = this.ordered[i];
		this.ordered[i - 1].prevIndex = i;
		this.ordered[i - 1].index = i - 1;
		this.arr[i - 1] = this.arr[i];
	}

	putTemp(j) {
		this.temp.prevIndex = this.temp.index;
		this.ordered[j] = this.temp;
		this.ordered[j].index = j;
		this.arr[j] = this.temp.val;
		this.temp = false;
		this.updateMap()
	}

	markSorted(i) {
		if (typeof i === 'number') {
			this.sorted[i] = true
		} else {
			for (var j = i.start; j < i.end; j++) {
				this.sorted[j] = true
			}
		}
	}

	updateMap() {
		this.ordered.forEach((arrPosition, i) => {
			var item = {index: arrPosition.index, moved: false, sorted: this.sorted[arrPosition.index]};
			if (arrPosition.prevIndex !== null && (arrPosition.index !== arrPosition.prevIndex)) {item.moved = true }
			arrPosition.prevIndex = null;
			arrPosition.history.push(item);
		});
		this.step += 1;
	}

	generateMap() {
		let map = [];
		for (let i = 0; i <= this.step; i++) {
			let arr = [];
			map.push(arr);
			for (let j = 0; j < this.ordered.length; j++) {
				arr.push(null);
			}
			this.ordered.forEach(arrPosition => {
				arr[arrPosition.history[i].index] = {val: arrPosition.val, moved: arrPosition.history[i].moved, sorted: arrPosition.history[i].sorted};
			});
		}
		return map
	}

	prettyMap() {
		let str = '';
		let map = this.generateMap();
		map.forEach(line => {
			str += line.map(e => `${e.val} ${e.moved ? "MOVED " : "STAYED"}`).join('| ') + '\n'
		})
		console.log(str)
	}
}

export default ArrayTracker
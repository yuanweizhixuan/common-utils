function debounce(fn, delay, trigger = false) {
	let t = null;
	let res = null;
	let debounced = function debounced() {
		let _self = this;
		let args = arguments;
		if (t) {
			clearTimeout(t);
		}
		if (trigger) {
			let exec = !t;
			t = setTimeout(function () {
				t = null;
			}, delay);
			if (exec) {
				res = fn.apply(_self, args);
			}
		} else {
			t = setTimeout(function () {
				res = fn.apply(_self, args);
			}, delay);
		}
		return res;
	};
	debounced.remove = function () {
		clearTimeout(t);
		t = null;
	};
	return debounced;
}

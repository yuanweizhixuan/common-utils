"use strict";

function debounce(fn, delay) {
	var trigger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	var t = null;
	var res = null;
	var debounced = function debounced() {
		var _self = this;
		var args = arguments;
		if (t) {
			clearTimeout(t);
		}
		if (trigger) {
			var exec = !t;
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

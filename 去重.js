/** 对内容进行去重 */
function unique(arr) {
	var len = arr.length
	for (var i = 0; i < len; i++) {
		for (var j = i + 1; j < len; j++) {
			if (arr[i].date === arr[j].date) {
				arr.splice(j, 1);
				len--;
			}
		}
	}
	return arr;
}

console.log(
	unique([
		{
			date: "aaa"
		},
		{
			date: "bbb"
		},
		{
			date: "ccc"
		},
		{
			date: "aaa"
		},
		{
			date: "ddd"
		},
		{
			date: "ccc"
		}
	])
);
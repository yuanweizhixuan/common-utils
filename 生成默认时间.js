/**
 * 生成默认日期 格式: 年-月-日 格式的日期
 * @param {*} separator 分隔符 默认是:-
 * @returns 年-月-日 格式的字符串时间
 */
function generateDefaultDate(separator) {
	if (separator === "" || separator === undefined) {
		separator = "-";
	}
	var date = new Date();
	var y, m, d;
	y = date.getFullYear();
	m = date.getMonth() + 1;
	d = date.getDate();

	m = m >= 10 ? m : "0" + m;
	d = d >= 10 ? d : "0" + d;

	return y + ("" + separator + "") + m + ("" + separator + "") + d;
}

console.log("generateSIGNTIME()", generateDefaultDate("-"));

/**
 * @param {*} beginTime 开始时间
 * @param {*} endTime 结束时间
 * @param {*} minimum 最小相差多少天
 * @param {*} maximum 最大相差多少天
 */

/**
 * 计算两个时间相差多少天,可以指定开始时间 结束时间,最小需要多少时间,最大需要多少时间
 * @param {*} beginTime 开始时间
 * @param {*} endTime 结束时间
 * @param {*} minimum 最小相差多少天
 * @param {*} maximum 最大相差多少天
 * @param {*} callback 回调函数
 */
function calcTime(beginTime, endTime, minimum, maximum, callback) {
	if (minimum) {
		minimum = 0
	}
	if (maximum) {
		maximum = 13
	}
	var dateSpan, calcData;
	var begin = +new Date(beginTime);
	var end = +new Date(endTime);
	if (end - begin < 0) {
		console.log("开始时间大于结束时间");
		return;
	}
	// 判断选择的时间是否大于十四天
	var sDate1 = Date.parse(beginTime);
	var sDate2 = Date.parse(endTime);
	dateSpan = sDate2 - sDate1;
	dateSpan = Math.abs(dateSpan);
	calcData = Math.floor(dateSpan / (24 * 3600 * 1000));

	if (calcData < minimum) {
		console.log("选择时间需" + minimum + "-" + maximum + "天");
		return;
	}

	if (calcData > maximum) {
		console.log("选择的时间大于" + maximum + "天");
		return;
	}
	if (callback instanceof Function) callback()
}

calcTime(new Date(), new Date(), 1, 20, function () {
	console.log(111);
})


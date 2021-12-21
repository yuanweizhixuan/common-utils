/**
 * 根据当前时间  然后根据传入的postpone 获取往前或者往后的几天的世间,
 * @param {*} postpone 传入正数则表示往后推几天  传入负数表示往前几天
 */
function getCurrentDate(postpone) {
	console.log('postpone', postpone);
	if (postpone === undefined) {
		postpone = 0
	}
	var date, currentTimeStamp, weekDay
	date = new Date();
	currentTimeStamp = date.valueOf()
	var startTimeStamp = currentTimeStamp + (1000 * 60 * 60 * 24 * postpone)
	weekDay = new Date(startTimeStamp)
	date = formatDate(date)
	weekDay = formatDate(weekDay)
	console.log("current", date, "datestamp", currentTimeStamp, "根据postpone 推算的时间", weekDay, "date");
}

getCurrentDate(-1)


/**
 * 将传入的时间字符串按照2222-11-11 的格式返回
 * @param { String} start  传入的开始字符串
 * @returns  xxxx-xx-xx 格式的字符串
 */
function formatDate(start) {
	var temp = {}
	var dateStr = new Date(start);
	temp.y = dateStr.getFullYear()
	temp.m = dateStr.getMonth() + 1
	temp.d = dateStr.getDate()
	temp.m = temp.m >= 10 ? temp.m : "0" + temp.m
	temp.d = temp.d >= 10 ? temp.d : "0" + temp.d
	return temp.y + '-' + temp.m + '-' + temp.d
}
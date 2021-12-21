/**
 * 根据传入的日期时间对象获取到时间
 * @param {*} dateStr  日期字符串 如果不包含小时分钟秒数则返回的会是00:00:00
 * @returns {String} 拼接后的小时分钟描述字符串
 */
function getDayTime(dateStr) {
    var date = new Date(dateStr)
    var h ,
        m ,
        s
    h = date.getHours()
    m = date.getMinutes()
    s = date.getSeconds()

    h = h >= 10 ? h : '0' + h
    m = m >= 10 ? m : '0' + m
    s = s >= 10 ? s : '0' + s
    return h + ':' + m + ':' + s
}

console.log('getDayTime(new Date())', getDayTime(new Date()));

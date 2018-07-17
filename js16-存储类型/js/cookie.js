//设置cookie
function setcCookie (name,value,expiresDays) {
	//获取当前时间
	var d = new Date();
	//设定过期时间
	d.setTime(d.getTime()+expiresDays*24*60*60*1000);
	//d.toGMTString()将时间转化成格林威治时间字符串
	document.cookie = name + "=" + value +";expiresDays=" + d.toGMTString();
}
//获取对应的cookie值
function getCookie (name) {
//	var name = name + "=";
	var cookieArr = document.cookie.split(";");
	console.log(cookieArr);
	for (var i = 0; i < cookieArr.length; i++) {
		//去除数组元素中的空格
		var a = cookieArr[i].trim();
		//遍历数组，找出对应的键值，并返回
		if (a.indexOf(name)==0) {
			return a.slice(name.length+1,a.length);
		}
	}	
	//当前对应键名的cookie不存在时，返回空字符串
	return "";
}
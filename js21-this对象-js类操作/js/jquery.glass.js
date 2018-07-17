//封装jq放大镜插件
$.fn.extend({
	//引入css文件
	glass : function(){
		$("head").append("<link rel='stylesheet' type='text/css' href='js/jquery.glass.css'/>");
		//创建固定标签
		var glassHtml = $(
			'<div id="small">'
				+'<img src="img/min.jpg" id="smallimg"/>'
				+'<div id="dragbox">'
				+'</div>'
			+'</div>'
			+'<div id="big">'
				+'<img src="img/max.jpg" alt="" id="bigimg" />'
			+'</div>');
	}
})

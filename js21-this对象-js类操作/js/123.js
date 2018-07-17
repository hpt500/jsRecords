var div = $("<div class='con'><div class='cont'><div class='contt'><img src='"+$("#mrimg").attr("src")+"' class='contt_img'/><span class='contt_name'>"+$("#mrname").text()+"</span><span class='contt_time'>12:00</span></div><div class='contw'>"+$("#conword").val()+"</div></div><div class='conb'><a href='javascript:void(0)' class='con_pl'><img src='img/48-48/13-speak.png'/>评论</a><a href='javascript:void(0)' class='con_zf'><img src='img/48-48/15-help.png'/>转发</a><a href='javascript:void(0)' class='con_dz'><img src='img/48-48/16-ask.png'/>赞</a><br/></div><div class='conp'><textarea name='pinglun' class='pinglun' rows='' cols='' placeholder='我也说一句'></textarea><a href='javascript:void(0)' class='conp_bq'><img src='img/48-48/3-club.png' />表情</a><a href='javascript:void(0)' class='conp_img'><img src='img/48-48/12-nature.png'/>图片</a><input type='file' name='' id='' value='' style='display: none;'/><a href='javascript:void(0)' class='conp_submit'><img src='img/48-48/6-box.png' />评论</a></div></div>")
		.appendTo("#maincenter").slideDown("slow");
		

//function pl () {
	//评论点击事件
	/*var pinglun = true;
	$(".con_pl").on("click",function () {
		if(pinglun){
			pinglun = false;
			$(".conp").css("display","block");
		}else{
			pinglun = true;
			$(".conp").css("display","none");
		}
	});*/
//}
//function dz () {
	//点赞事件
	/*$(".con_dz").on("click",function () {
	//	$(".con_dz img").attr("src","img/48-48/14.search.png");
		$(this).html("<img src='img/48-48/14.search.png'/>已赞");
	});*/
//}


<div class="con">
					<div class="cont">
						<div class="contt">
							<img src="img/48-48/4-collection.png" class="contt_img"/>
							<span class="contt_name">阿萨达</span>
							<span class="contt_time">12:00</span>
						</div>
						<div class="contw"></div>
					</div>
					<div class="conb">
						<a href="javascript:void(0)" class="con_pl"><img src="img/48-48/13-speak.png"/>评论</a>
						<a href="javascript:void(0)" class="con_zf"><img src="img/48-48/15-help.png"/>转发</a>
						<a href="javascript:void(0)" class="con_dz"><img src="img/48-48/16-ask.png"/>赞</a><br/>
						
					</div>
					<div class="conp">
						<textarea name="pinglun" class="pinglun" rows="" cols="" placeholder="我也说一句"></textarea>
						<a href="javascript:void(0)" class="conp_bq"><img src="img/48-48/3-club.png" />表情</a>
						<a href="javascript:void(0)" class="conp_img"><img src="img/48-48/12-nature.png"/>图片</a>
						<input type="file" name="" id="" value="" style="display: none;"/>
						<a href="javascript:void(0)" class="conp_submit"><img src="img/48-48/6-box.png" />评论</a>
					</div>
				</div>
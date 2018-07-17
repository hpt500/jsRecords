function tweenMove (odj,type,begin,end,endT,tweenType) {
	var beginT = 0;
	var ct=true;
	var t = setInterval(function  () {
		if(beginT==0){
			ct=true;
		}
		if(beginT==endT){
			ct=false;
		}
//		if(beginT==endT){
//			clearInterval(t);
//			console.log(ct);
//		}
		if(ct){
			beginT++;
			odj.style[type] = Tween[tweenType](beginT,begin,end-begin,endT)+"px";
		}else{
			beginT--;
			odj.style[type] = Tween[tweenType](endT,begin,begin-end,beginT)+"px";
		}
		
	},60);
}
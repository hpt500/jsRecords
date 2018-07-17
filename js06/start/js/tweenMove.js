var t1 ;
function tweenMove (odj,type,begin,end,endT,tweenType) {
	var beginT = 0;
	function  time1() {
		t1 = setInterval(function  () {	
			beginT++;
			if (beginT==endT) {
				clearInterval(t1);	
			}
		odj.style[type] = Tween[tweenType](beginT,begin,end-begin,endT)+"px";
		},60);
	}
	time1();
}
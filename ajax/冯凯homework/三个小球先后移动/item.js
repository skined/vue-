    var a=document.getElementById('aa');
	var b=document.getElementById('bb');
	var c=document.getElementById('cc');
	function move(ele,target,callback){
		 var step =0;
	 var timer = setInterval(function(){
		if(step>=target){
		ele.style.left=target+'px';
		// 目标运动结束
		clearInterval(timer);
		callback();
	}else{
		 m+=5;
	     ele.style.left= step+'px';
	  }
	},13)
}
move(a,300,function(){
	move(b,300,function(){
		move(c,300,function(){})      
	})
})
// 回调地狱
// function move(qu1,100,callback){
// //运动逻辑
// callback()
// }
// move('qiu1',100,callback)
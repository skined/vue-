var a=document.getElementById('aa');
	var b=document.getElementById('bb');
	var c=document.getElementById('cc');
	function move(ele,target,callback){
	 var m =0;
	 var timer = setInterval(function(){
		if(m>=target){
		ele.style.left=target+'px';
		// 目标运动结束
		clearInterval(timer);
		callback();
	}else{
		 m+=5;
	     ele.style.left= m+'px';
	  }
	},13)
}
// move(ele,target,callback)
move(a,300,function(){
	move(b,300,function(){
		move(c,300,function(){})      
	})
})
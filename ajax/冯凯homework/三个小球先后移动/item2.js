var a=document.getElementById('aa');
	var b=document.getElementById('bb');
	var c=document.getElementById('cc');
function move(ele,target){
	return new Promise((resolve,reject)=>{
		let m=0;
		let timer=setInterval(function(){
             if(m>=target){
             	ele.style.left=target+'px';
             	clearInterval(timer);
             	resolve(1);
             }else{
             	m+=5;
             	ele.style.left=m+'px';
             }
		},13)
	})
}
async function m(){
	await move(a,300)
	await move(b,300)
	await move(c,300)

}
move(a,300).then(data=>{
	   move(b,300).then(data=>{
		move(c,300)
	})
})
move(a,300).then(data=>{
	return move(b,300)
}).then(data=>{
	return move(c,300)
})
let fs=require('fs');
fs.writeFile('a.txt','{name:kkk}','utf8',function(err){
	if(err){
		return console.log(err)
	}
})

 
// fs文件模块
let fs = require('fs')
//读取文件(异步)
//参数 文件名 配置 回调函数 回调函数的参数 二个 err,data error first 错误优先
fs.readFile('a.txt','utf-8',function(err,data){
		if(err)return console.log(err);
		console.log(data);
})
//先喝豆浆 在吃包子
function myReadFile(url,callback){
	fs.readFile(url,'utf-8',function(err,data){
		if(err)return
		callback(data)	
	})
}
// 我们可以读取完文件之后，做任何其他事件，而且还可以用读取完文件的数据
myReadFile('a.txt',function(data){
	console.log(data,'myread','1')
  myReadFile('b.txt',function(data){
  	  console.log(data,'myread','2')
  })
})

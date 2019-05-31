let fs = require('fs');
//参数：路径 写入的数据 配置项 回调
// fs.writeFile('./a.txt',"{name:a}", 'utf8',function(err){
//   if(err)return console.log(err);
// })
// 封装写文件的方法
// function myWriteFile(url){
//   return new Promise((resolve,reject)=>{
//       fs.writeFile('./a.txt','{name:a}','utf8',function(err,data){
//          if(err)reject(err)
//          resolve(data);
//       })
//   })
// }
// myWriteFile('./a.txt').then((data)=>{
//     console.log(data);
//     return myWriteFile('./a.txt')
// }).then(data=>{
//   console.log(data)
// })



function writeFile(url){
	return new Promise((resolve,reject)=>{
		fs.writeFile('./a.txt','{name:aa}','utf8',function(err,data){
			if(err)reject(err)
				resolve(data);
		})
	})
}
writeFile('./a.txt').then((data)=>{
	console.log(data);
	return writeFile('./a.txt')
}).then(data=>{
	console.log(data)
})
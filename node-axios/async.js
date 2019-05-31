  // 异步的终极解决方法
  // async await
  // es7n
  //async await 配套使用 async 表示后跟函数里面有异步操作，返回值是promise
  //await后面通常跟promise也可以跟普通值
  // 表示promise执行的结果 await会按顺序执行
 let fs=require('fs')
 //封装promise版读取文件的方法
 function myReadFile(url){
  return new Promise((resolve,reject)=>{
    fs.readFile(url,'utf-8',function(err,data){
      if(err)reject(err)
        resolve(data)
      
      })
    })
  } 
async function readfiles(){
	let data1=await myReadFile('a.txt')
 	let data2=await myReadFile('b.txt')
 	return {data1,data2}
}
readfiles().then(data=>{
	console.log(data)
})
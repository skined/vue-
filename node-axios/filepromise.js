 //fs文件模块
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
  myReadFile('./a.txt').then((data)=>{
     console.log(data,1)
     return myReadFile('./a.txt')
  }).then(data=>{
    console.log(data,2)
  })
  // 异步的终极解决方法
  // async await
  // es7n
  //async await 配套使用 async 表示后跟函数里面有异步操作，返回值是promise
  //await后面通常跟promise 表示promise执行的结果 

//fs自带的promise10.2.8以上才有的
let fs=require('fs');
let fsPromise=fs.promises;
fsPromise.readFile('a.txt','utf8').then(data=>{
	console.log(data);
})
fsPromise.writeFile('a.txt','1111','utf8').then(data=>{
	console.log('写入成功');
})
let fs=require('fs');
let fsPromise=fs.promises;
fsPromise.readFile('a.txt','utf8').then(data=>{
	console.log(data);
})
fsPromise.writeFile('a.txt','1111','utf8').then(data=>{
	console.log('写入成功');
})




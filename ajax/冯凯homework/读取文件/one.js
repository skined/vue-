let fs=require('fs');
function readFile(url){
	return new Promise((resolve,reject)=>{
		fs.readFile(url,'utf8',function(err,data){
           if(err)reject(err)
           	resolve(data)
		})
	})
}
readFile('./a.txt').then(data=>{
	console.log(data,1);
	return readFile('./a.txt')
}).then(data=>{
	console.log(data,2)
})













// let fs=require('fs');
// function myReadFile(url){
//  	return new Promise((resolve,reject)=>{
//       fs.readFile(url,'utf8',function(err,data){
//       	 if(err)reject(err)
//       	 resolve(data);
//       })
//  	})
// }
// myReadFile('./a.txt').then((data)=>{
//     console.log(data,1);
//     return myReadFile('./a.txt')
// }).then(data=>{
// 	console.log(data,2)
// })

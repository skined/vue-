// // const PENDING = 'PENDING';
// // const RESOLVED = 'RESOLVED';
// // const REJECTED = 'REJECTED';
// // // new Promise(function(){
// // 	// resolve()
// // // })
// // function Promise(excutor){
// // 	// resolve 和reject是函数 
// // 	// 初始化成功和失败的值 
// // 	//用于存放成功回调的函数
// // 	that.onResolveCb=[];
// // 	//用于存放失败回调的函数
// // 	that.onRejectCb=[];
// // 	let that = this;
// // 	that.value = undefined;
// // 	that.reason= undefined;
// // 	// 用status表示promise的状态  初始化为pending状态 
// // 	that.status  = PENDING;
// // 	// 定义promise的三种状态 
// // 	function resolve(value){//value表示promise成功的值 
// //        if(that.status===PENDING){
// // 		   that.value =value;
// // 		   that.status=RESOLVED
// // 	   }
// // 	}
// // 	function reject(reason){//reason表示promise失败的值 
// // 		if(that.status===PENDING){
// // 			that.reason=reason;
// // 			that.status=REJECTED
// // 			//把then里面的成功的拿出来挨个执行
// // 			that.onResolveCb.forEach(fn=>fn())
// // 		}
// // 	}
// // 	excutor(resolve,reject)
// // }
// // // p1.then(data=>{},err=>{})
// // Promise.prototype.then=function(onFufilled,onRejected){
// //   let that =this;
// //  // 如果promise成功就走成功的回调函数，并且传入成功的原因  
// //   if(that.status===RESOLVED){
// // 	  onFufilled(that.value)
// //   }
// // // 如果promise失败就走失败的回调函数并且传入失败的原因
// //   if(that.status===REJECTED){
// // 	  onRejected(that.reason)
// //   }
// // }
// // module.exports = Promise


// const PENDING = 'PENDING';
// const RESOLVED = 'RESOLVED';
// const REJECTED = 'REJECTED';
// function Promise(excutor){
// 	let that = this;
// 	//resolve reject是函数
// 	//初始化成功和失败的值
// 	//用来存放成功回调函数的数组
// 	that.onResolveCd = []
// 	//存放失败回调函数的数据
// 	that.onRejectedCd = []
// 	that.value = undefined;
// 	that.reason = undefined;
// 	//用status表示promise的状态 初始化为pending状态
// 	that.status =  PENDING;
// 	//定义promise的三种状态
// 	//value表示promise成功的值
// 	function resolve(value){
// 		if (that.status === PENDING) {
// 			that.value = value;
// 			that.status = RESOLVED;
// 			//把then里成功的函数拿出来挨个执行
// 			that.onResolveCd.forEach(fn=>fn());
// 		}
// 	}
// 	//reason表示promise失败的值
// 	function reject(reason){
// 		if (that.status === PENDING) {
// 			that.reason = reason;
// 			that.status = REJECTED;
// 			// 把then里失败的函数拿出来挨个执行
// 			that.onRejectedCd.forEach(fn=>fn());
// 		}
// 	}
// 	excutor(resolve,reject);
// }
// Promise.prototype.then = function(onFufilled,onRejected){
// 	let that = this;
// 	//如果promise成功就走成功的回调函数，并且传入成功的原因
// 	if (that.status===RESOLVED) {
// 		onFufilled(that.value);
// 	}
// 	//如果promise失败就走失败的回调函数，并且传入失败的原因
// 	if (that.status===REJECTED) {
// 		onRejected(that.reason);
// 	}
// 	if (that.status===PENDING) {
// 		//吧成功或者失败的回调函数存在对应的数组里面
// 		that.onResolveCd.push(()=>{
// 			onFufilled(that.value);
// 		});
// 		that.onRejectedCd.push(()=>{
// 			onRejected(that.reason);
// 		})
// 	}
// };
// module.exports = Promise;
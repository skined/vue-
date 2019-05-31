        //数组扁平化  //用一个空数组放入 如果这个项是数组的话继续拆分成单个的再放入
        let ary=[1,2,3,[3,4],[2,3]]
        let res=[].concat.apply([],ary)
        let res1=[].concat(...ary)
        console.log(res)
        function flatary(ary){
              //定义一个空数组
              let newary=[];
               for(let i=0;i<ary.length;i++){
                   if(Array.isArray(ary[i])){
                       newary=[...newary,...flatary(ary[i])]
                            
                   }else{
                      newary.push(ary[i])
                   }
               }
               return newary
        }
       let res3= ary.reduce((prev,next)=>{
            return prev.concat(next)
        },[])
    console.log(res3)
    console.log(flatary(ary))
    //封装数组的reduce方法
   let ary3=[1,2,3,4]
   Array.prototype.myreduce=function(callback,prev){
    for(let i=0;i<this.length;i++){
       if(!prev){
          prev=cb(this[i],this[i+1],i,this)
          i++
       }else{
         prev=cb(prev,this[i],this[i+1],this)
        
       }
    }     
    return prev
   }
   let result=ary3.reduce((prev,next)=>{
       return prev.concat(next)
   },[])
 console.log(result) 
//[1,2,3,[4,5,[1,2,3]]]实现数组扁平化(简化)map可以用



//实现数组扁平化的方法
let arr=[]
function one(ary){
  return arr.toString().split(',').map(function(item){
      return Number(item)
  })
}
console.log(one(ary))
// let res4=[].concat([],...ary)
// console.log(res4)

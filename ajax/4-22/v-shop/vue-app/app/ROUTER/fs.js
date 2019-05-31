//函数里面返回函数 回调作为参数
//两个箭头以上的叫做高阶函数
//typeof constructor instanceof
// object.prototype.tostring.call

function _toString(str){
    return  
    Object.prototype.toString.call(str).slice(8,-1)
    // [object array]
}
// function istype(type){
//   return function(str){
//     return _toString(str)==type
//   }
// }
let istype=type=>str=>_toString(str)==type;
let util={}
let type=['String','Array','Object','Number','null']
type.forEach(method=>{
    util[`is${method}`]=istype(method)         
})
console.log(util.isArray([]))
console.log(util.isString([]))
console.log(util.isNull(undefined))
// util.isObject=istype('Object')
// util.isNumber=istype('Number')
// util.isArray=istype('Array')
// let isString=istype('String')
// let isArray=istype('Array')
// console.log(isString('abc'))
// console.log(isArray([]))

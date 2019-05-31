// 类函数的区别以及应用
class Parent{
  constructor(){
      //构造函数
   this.name='lili'
  }
  a=1 //es7
  rename(){
      //表示原型上面的方法 Parent.prototype.rename=function(){

    //   }
    console.log(this.name+'abc')
  }
  //静态方法 表示在类上的方法
  static add(a,b){
    //   Parent.add=function(){}
      return a+b
  }
}
let p=new Parent() 
p.rename()
console.log(p.a)  //1
// Promise.reject(err)
console.log(Parent.add(1,2))
// extends表示继承的意思
class Child extends Parent{
    constructor(){
        super()//继承的时候 必须加super
    }
}
let c=new Child()
console.log(c.name,c.a,'——————')
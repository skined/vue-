class Animail {
  constructor() {
    //构造函数
    this.age = 2
  }
  getTage() {
    //Animal.prototype.getTage()
    console.log(this.age)
  }
  static setage() {
    //表示静态方法，类上的方法
  }
}

// Promise.reject()  p1.then
function Animail() {
  this.age = 2
}
Animail.prototype.getTage = function() {
  console.log(this.age)
}
Animail.setage = function() {}

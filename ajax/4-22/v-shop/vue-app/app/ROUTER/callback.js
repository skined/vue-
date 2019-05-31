//回调函数作为餐数 预制参数
//有一个西瓜 一次吃一口 2口吃完
function after(count,cb){
    //每调用一次数量减一
    let ary=[]  
    return function(data){
        ary.push(data)
       if(--count==0){
           cb(ary)
       }
    }
}
eat=after(4,function(data){
    console.log('吃完了',data)
})
eat('小')
eat('猪')
eat('佩')
eat('奇')
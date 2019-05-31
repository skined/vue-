let express =  require('express');
let app = express();
let path=require('path')
let cors = require('cors')
//中间件都用use来使用，中间件基本上都是函数
//可以实现跨域
app.use(cors())
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
//path.join和path.resolve是拼接路径用的
//放问静态文件的时候需要加速static路径
app.use('/static',express.static(path.join(__dirname,'public')))
//所有的都会先走use这里面的req,res和下面的req,res是相当于一个拦截器 中间件藜麦你必须调用next才会继续往下走
app.use(function(req,res,next){
    res.header('Content-type','text/plain;charset=utf8');
    next()
}) 
let fs  = require('fs')
let fsPromise = fs.promises;
function readjosn(path){
 return fsPromise.readFile(path,'utf8').then(data=>{
    return JSON.parse(data) 
 })
}
function writejson(path,data){
  return fsPromise.writeFile(path,JSON.stringify(data),'utf8')
}
// 引入轮播图数组
let banner = require('./banner')
app.get('/slider',function(req,res){
   res.json({
       code:200,
       data:banner
   })
})
//首页列表接口
app.get('/hot',function(req,res){
  readjosn('./good.json').then(data=>{
      let hotdata = data.slice(0,6)
      res.json({
          code:200,
          data:hotdata
      })
  })
})
//分页接口
app.get('/list',function(req,res){
    // req.query 可以直接取到查询字符串的值
    let page = parseInt(req.query.page)  //取出前端传过来的页数
    readjosn('./good.json').then(data=>{
        let maxlength = (page+1)*5;//获取条数
       let pagedata = data.slice(maxlength-5,maxlength)
       //判断是否有下一页 maxlength
       // >=data.length表示没有下一页
       let hasMore = maxlength>=data.length?false:true
       res.json({
           code:200,
           data:{
            hasMore,
            pagedata
          }
       })
    })
})
//详情页面
app.get('/detail',function(req,res){
    let id = req.query.id
    readjosn('./good.json').then(data=>{
        let single = data.find(item=>item.id==id)
        if(!single){
          res.json({
             code:201,
             data:{}
          })
          return
        }
        res.json({
         code:200,
         data:single
        })
      })
})
//购物车列表接口
app.get('/carlist',function(req,res){
    readjosn('./my.json').then(data=>{
        res.json({
          code:200,
          data
        })
      })
})
app.post('/addcar',function(req,res){
  let adData = req.body;
  if(!adData.id && (adData.id!=0 && !adData.name)){
    res.end(JSON.stringify({
      code:201,
      msg:'参数错误'
    }))
  }
  readjosn('./my.json').then(data=>{
    let newDate;
    //看购物车有没有这条数据，有的话数量加一，没有的话数量为一
    let singledata = data.find(item=>item.id==adData.id)
    if(singledata){
      singledata.count++
      newDate=[...data]
    }else{
      adData.count=1;
      newDate=[...data,adData]
    }
    //zz最后把数据写到my.json中
    writejson('./my.json',newDate).then(data=>{
      res.json({
        code:200,
        msg:'添加成功'
      })
    })
  })
})
//删除购物车接口
app.delete('/delegood',function(req,res){
  let id = req.query.id;
  readjosn('./my.json').then(mylist=>{
      let newData = mylist.filter(item=>item.id!=id)
      writejson('./my.json',newData).then(()=>{
        res.json({
          code:200,
          data:{}
        })
      })
  })
})
//购物车数量
app.post('/changecount',function(req,res){
  let modifyData = req.body
  readjosn('./my.json').then(carlist=>{
    let newCarList =  carlist.map(item=>{
       //如果id相等，证明是被修改的项，返回修改项，否则返回原有数据
       if(modifyData.id==item.id){
         return modifyData
       }
       return item
     })
     writejson('./my.json',newCarList).then(()=>{
       res.json({
         code:200,
         msg:'修改成功'
       })
     })
   })
 })
app.listen(3200)
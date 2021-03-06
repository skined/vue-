let http=require('http')
let url=require('url')
let fs=require('fs')
let fsPromise=fs.promises
function readjson(path){
  return fsPromise.readFile(path,'utf8').then(data=>{
    return JSON.parse(data)
  })
}
function writejson(path,data){
  return fsPromise.writeFile(path,JSON.stringify(data),'utf8')
}
//引入轮播图的数组
let banner=require('./banner')
http.createServer((req,res)=>{
  //允许那个域名跨域
  res.setHeader('Access-Control-Allow-Origin',"*");
  //允许那个方法跨域
  res.setHeader('Access-Control-Allow-Methods','PUT,POST,GET,DELETE')
  res.setHeader('Access-Control-Allow-Headers',"*")
  //预测存活时间，单位是s
  res.setHeader('Access-Control-Allow-Max-Age',6)
  //设置编码格式
  res.setHeader('Content-Type','text/json;charset=utf8')
  if(req.method==='OPTIONS'){
    res.end()//options请求不做任何处理
  }
  let {pathname,query}=url.parse(req.url,true);
  //轮播图接口
  if(pathname==='/slider'){
    res.end(JSON.stringify({
        code:200,
        data:banner
    }))
    return
  }
  //首页列表接口
  if(pathname==='/hot'){
    readjson('./good.json').then(data=>{
      let hotdata=data.slice(0,6);
      setTimeout(()=>{
        res.end(JSON.stringify({
          code:200,
          data:hotdata
        }))
      },3000)
    })
    return
  }
  //分页接口
  if(pathname==='/list'){
    let page=parseInt(query.page)//去除前端传过来的页数
    //把所有的数据拿过来，第一页是1-5条，第二页是5-10条
    readjson('./good.json').then(data=>{
      let maxlength=(page+1)*5//获取条数
      let pagedata=data.slice(maxlength-5,maxlength)
      //判断是否有下一页maxlength
      //>=data.length表示没有下一页
      let hasMore=maxlength>=data.length?false:true
      res.end(JSON.stringify({
        code:200,
        data:{
          hasMore,
          pagedata
        }
      }))
    })
    return
  }
  //详情页面
  if(pathname==='/Detail'){
    let id=query.id
    readjson('./good.json').then(data=>{
      let single=data.find(item=>item.id==id)
      if(!single){
        res.end(JSON.stringify({
          code:201,
          data:{}
        }))
        return
      }
      res.end(JSON.stringify({
        code:200,
        data:single
      }))
    })
    return
  }
  //定义列表接口
  if(pathname==='/carlist'){
    readjson('./my.json').then(data=>{
      res.end(JSON.stringify({
        code:200,
        data
      }))
    })
    return
  }
  //添加购物车
  if(pathname=='/addcar'){
    let str='';
    //请求监听数据
  req.on('data',chunk=>{
    str+=chunk;
  });
  //请求结束
  req.on('end',()=>{
    //adData传过来的数据
    //判断传进来的参数不存在
    if(str==""){
      res.end(JSON.stringify({
        code:201,
        msg:'参数错误'
      }))
      return
    }
    let adData=JSON.parse(str)
    if(!adData.id&&(adData.id!=0&&!adData.name)){
      res.end(JSON.stringify({
        code:201,
        msg:'参数错误'
      }))
      return
    }
    readjson('./my.json').then(data=>{
      let newData;//最后写入的数据
      //看购物车有没有这条数据‘
      let singledata=data.find(item=>item.id==adData.id)
      //有的话数量加一，没有的话数量等于1
      if(singledata){
        singledata.count++;
        newData=[...data]
      }else{
        adData.count=1;
        newData=[...data,adData]
      }
      //把最后的数据写道car.json里面
      writejson('./my.json',newData).then(()=>{
        res.end(JSON.stringify({
          code:200,
          msg:'添加成功'
        }))
      })
    })
  })
  return
  }
  //删除购物车商品接口
  if(pathname==='delegood'){
    let id=query.id;
    readjson('./my.json').then(carlist=>{
       let newData=carlist.filter(item=>item.id!=id)
       writejson('./my.json',newData).then(()=>{
         res.end(JSON.stringify({
           code:200,
           data:{}
         }))
       })

    })
    return
  }
  //用于计算添加数量
  if(pathname==='/changecount'){
    let str='';
  //请求监听数据
  req.on('data',chunk=>{
    str+=chunk;
  })
  req.on('end',()=>{
    //它是一个被修改的数据
    let modifyData=JSON.parse(str);
    //拿到购物车所有的数据
    readjson.prototype('./my.json').then(carlist=>{
      let newCarlist=carlist.map(item=>{
        //如果id相等，证明是修改的选项，返回修改项否则直接返回原有选项
        if(modifyData.id==item.id){
          return modifyData
        }
        return item
      })
      writejson('./my.json',newCarlist).then(()=>{
        res.end(JSON.stringify({
          code:200,
          msg:'修改成功'
        }))
      })
    })
  })
  }
  res.end('404')
}).listen(3100)
module.exports={
//devServer wepack下的服务器插件
devServer:{
    //proxy代理
      proxy:'http://localhost:3200'
    // proxy: {  
    //           '^/': {
    //               target:'http://localhost:3200',
    //               changeOrigin:true,
    //               ws:false,
    //               pathRewrite:{
    //                   '^/':'/'
    //               }
    //           }
            
    //     }
    }
 }
//  //'/'是我要代理的路径
//  //target目标地址 访问/的时候等于访问http://localhost:3200
//  //changeOrigin是否改变域名
//  //pathRewirte路径重写
//  //ws是否代理we'bsocket


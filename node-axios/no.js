//node 后端语言 无阻塞异步iog
	let http=require('http')
	let url=require('url')//请求的路径
	// url:解析url上面的各种参数
	// url是请求传过来的 也是自带的
	//http模块 自带模块
	//创建自己的第一个服务器
	//createSever创建服务器
	//req:request请求
	//res response响应
	//需要有端口号0-65535 baidu:80
	//listen:表示监听那个端口号
	//res.end()后端响应数据
	//vscode voderuning插件启动    webstorm直接有运行按钮
	//sublimeText命令行启动 node 文件名
	//注意服务端代码有改动需要重启服务器
    // urlobj.pathname 访问路径 urlobj.query查询字符串
    // localhost:3000?name=1&&pathword=2
    // localhost=ab
    // 这样就可以通过不同路径写出不同出口
	http.createServer(function(req,res){
		   let urlobj=url.parse(req.url,true);
		   //解构赋值
		   // let {pathname,query}=url.parse(req.url,true)
		   console.log(urlobj);
		    pathname=urlobj.pathname;
		  let.query=urlobj.query;
		   if(pathname=='/a'){
		   	console.log(query.name);
		   	res.end('this is a')
		   	return
		   }
		   if(pathname=='/b'){
		   	res.end('this is b')
		   	return
		   }

           res.end('hello world');
	}).listen(3000,function(){
		console.log('服务端3000当前启动成功');
	})

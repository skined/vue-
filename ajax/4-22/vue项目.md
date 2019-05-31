1.## vue项目
1.运行项目
2.npm run serve
3.打包项目
4.npm run build
运行完成之后会多一个文件夹，这个是上线用的 要在服务器端运行
5.额外 npm install http-server -g
global全局 在文件夹下面运行 http-server 自动吧目录下的index.html当成首页
app.vue根组件
es6的模块语法 
导入和导出的都是一个对象
import表示引入 必须是通过export导出的
export表示导出
export default默认导出
我们可以把每个.vue文件看成一个组件 //@ is analias to//src @符号是/src的别名
6.组件的使用三部曲
1）通过import引入组件
2)在components里面注册
3）用标签的形式使用
7.props传值如果是数组或者对象的时候必须用函数
1引入 2注册 3.用标签的形式使用
8.配置路由跳转
router-link 写完路径 
9.路由懒加载 
通过箭头函数和import方式直接使用
10.spa应用 单页面应用
11.使用字体图标：http://www.iconfont.com
12.路由激活的样式：
router-link-exact-active
router-link-active
exact='true'严格匹配
13.导航越来越多的时候 需要怎么处理 抽离成公共组件
style lang='less'表示使用什么方法的css处理语言 scoped 表示只对当前组件有效
14.可复用 可组合，可维护
##报错 can not find moudle
路径引错 或者文件不存在
css引入 放在asset文件夹里 引入的时候用./
常用import作为模块导入
15.轮播图组件 在src同级目录下简历一个mock文件夹或者其他位置都可以
mock文件夹用来存放我们的mork数据 
mork里面的代码和我们前端代码没有任何关系
16.ajax请求配置
在src文件夹下面建api/ajax文件夹 这里面方所有的请求
在api文件夹下面简历一个index.js的文件
index.js会被作为默认的路口写的时候可以省略
17.npm install axios
18.export let banner等于导出一个key value相对应的对象
import {} from '../api'='../api.index.js'
19.mock.js app.js 添加跨域配置(cors 跨域资源共享)
  getBanner().then(res=>{
    let {data}=res
    this.sliders=data
    })
19.轮播图下载地址npm install vue-awesome-swiper --save
列表也渲染 数据太多的时候需要分页显示
滚动加载更多
点击加载更多
can not find module路径印错 或者文件不存在
列表页分页需要传参：页数(默认第一页)
/list?page=1 1页显示5条数据
加载更多 滚动加载更多 判断什么时候滚动到底部(scrollTop>scrollHeight+clientHeight)
20.refs 可以获取元素或者组件
21.路由跳转到详情页
（1）使用标签的形式
    router-link:to tag="li"把a标签改变成需要的那个标签
    参数 aprams query
    2)params 不能用path 用name a
    需要去路由定义参数在路径后面用/:变量名 /:bid 表示必须有,但是不固定和params传过来的变量名一致,可以是多个
    /:id /:name
    3)this.$route.params.变量名
    4）query直接使用
    this.$route.query query会直接显示在地址
    ：to跳转到哪里 完全等价 this.$router.path()
   23.请求详情页数据
   请求详情页数据 需要传id 根据id
24.$router $route
25.手动给对象的属性增加监听：
this.$set/Vue.set 等于给这个对象后增加的key添加了defineProperty属性
对象后增加的属性并不会被劫持需要我们手动初始化
26.把一个组件当成一个带着事件和数据的html判断，只是我我们这个组建可以随便拆分，随处使用
拆分组件尽量遵循一个组件只实现一个功能的原则
1)带r表示路由的实例都放在router上
2)route路由对象信息 放路由的属性
git安装使用教程
<!-- https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137396287703354d8c6c01c904c7d9ff056ae23da865a000 -->
1.安装
2.初始用户名和邮箱(第一次安装)
$ git config --global user.name "Your Name"设置用户名
git config --global user.name "username"
设置邮箱
git config --global user.email "55343581@qq.com"
3.初始化git仓库 ，在你作为仓库的文件夹下面git init(一个文件夹只能使用一次)
4.添加文件到仓库
git add +文件名
git add -A -A表示所有添加所有
git add.
5.提交文件到本地仓库
git commit -m'提交的内容'
例子：git  commit-m'购物车代码'  
6.git 添加远程仓库地址 git remote add origin
https://gitub.com/ruam/first.git
查看远程仓库地址 git remote -v
7.把项目提交到远程仓库 git push master
修改之后
1.git add-A
2.git commit -m'注释修改或添加的内容'
git push origin master
8.input type=check 使用 v-model 的时候 出现 was assigned to but it has no setter我们需要设置get和set computed属性如果是单个值
promise A+规范https://malcolmyu.github.io/2015/06/12/Promises-A-Plus/#note-4
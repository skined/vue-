1. ui 界面创建项目
   vue ui
2. 命令行创建项目 步骤
   1）vue create '项目名字'
   2）选择手动或者默认
   默认 default (babel, eslint)
   手动 Manually select features
   3）选择手动之后 通过空格切换选中状态
   ◉ Babel 编译 es6 到 es5
   ◯ TypeScript ts
   ◯ Progressive Web App (PWA) Support PWA 渐进式 WEB 应用
   ◯ Router 路由
   ◯ Vuex vuex 状态管理
   ◯ CSS Pre-processors css 预处理器
   ◉ Linter / Formatter eslint(校验代码格式)
   ◯ Unit Testing (测试 )
   ◯ E2E Testing

3. 是否使用 history 路由模式
   Use history mode for router? (Requires pr
   oper server setup for index fallback in pro
   duction) (Y/n)
4. 选择 css 预处理器
   Sass/SCSS (with dart-sass)
   Sass/SCSS (with node-sass)
   Less
   Stylus
5. 设定配置文件的方式
   In dedicated config files (生成配置文件)
   In package.json （集成到 package.json 里面）

目录 vuex 文件夹 页面级组件
app.vue 主文件
mains 主入口 webpack 配置的
router.js 路由配置文件
assets 文件夹 放静态资源
components 文件夹 放公共组件(基础组件)
脚本配置
'scripts':{
vue 项目
目录 views 文件下 页面级组件 app.vue 根组件 mains 主入口 webpack 配置的 router.js 路由配置文件
assets 文件夹放静态资源文件 放公共组件（基础组件） 1.运行项目 npm run serve 2.打包项目 npm run build 运行完成之后会多一个 dist 文件夹 这个是最后上线的 要在服务器端运行 3.额外 npm install http-server -g global 全局在文件夹下面运行 http-server 自动把目录下的 index.html 当作首页
4.es6.的模板语法 导出和引入的东西都是一个对象 module(对象)import 表示引入必须是通过 export 到除的 export 导出的 export 表示导出 export default 默认导出 5.我们可以把每个 vue 文件看成一个组件//@is an alias to /src@符号是/src 的别名 6.组件使用的三部曲）通过 import 引入组件

    在components里面注册 3） 用标签的形式使用

    props传值默认值如果是数组或者对象的时候必须用函数
    配置路由跳转

数组，对象，布尔值需要用 v-bind 动态传值
定义成对象的时候可以设置成默认值和验证数据类型
router-link 写跳转路径
建立路由对应的.vue 文件
配置 rouer.js

    路由懒加载 通过箭头函数和import方式直接使用,在我们访问路由的时候才会加载
    spa应用 单页面应用
    使用字体图标 https://www.iconfont.cn/ 首页 列表页 购物车 返回 个人中心

    css引入 放在asset 文件夹里面 引入的时候用 ./
    常用import 作为模块导入
    拦截器 interceptors request response
    路由激活的样式 router-link-exact-active router-link-active exact 严格匹配
    导航组件 导航越来越多的时候 需要怎么处理 抽离成公共组件 style lang="less" 表示使用什么方式的css预处理语言 scoped 表示只对当前组件生效
    组件化的好处 可复用 可组合 可维护
    轮播图组件 在src同级目录下建立一个mock文件夹或者其他任何位置都可以 mock文件夹用来放我们的mock数据mock 里面的代码和前端代码是没有任何关系的
    axios基于promise封装的
    ajax请求配置 1）在src 文件夹下面建api/ajax文件夹 这里面放所有的请求 方便管理 在api 文件夹下面建立一个index.js 只要有index.js index.js会被作为默认的入口 写的时候可以省略 import {} from '../api' = '../api/index.js' 2）npm install axios

    export let getBanner 等于导出一个key，value相对应的对象

    mockjs app.js 添加跨域配置(cors 跨域资源共享)

//允许哪个域名跨域
res.setHeader('Access-Control-Allow-Origin',"\*");
//允许哪个方法跨域
res.setHeader('Access-Control-Allow-Methods','PUT,POST,GET,DELETE')
//预检测存活时间，单位是 s
res.setHeader('Access-Control-Max-Age',6)
if(req.method==='OPITIONS'){
res.end()//OPITIONS 请求不做任何处理
}

    轮播图 地址：https://github.com/surmon-china/vue-awesome-swiper 下载 npm install vue-awesome-swiper --save
    列表页分页 传参：页数(默认第一页) /list?page=1 1页显示5条数据 加载更多 滚动加载更多 判断什么时候滚动到底部 scrollTop+clientHeight>scrollHeight
    refs 可以获取元素或者组件
    路由跳转 跳转到详情页 使用标签的形式 router-link tag='li' 把a标签转成需要的标签名 a->li :to 跳转到哪里 完全等价this.$router.push({name:'detail',query:{id:item.id}}) 参数 params query 1)params 不能用path 用name

    需要去路由定义参数在路径后面用 /:变量名 /:id 必须有，但是不固定 和params对象传过来的变量名一致 可以是多个 /:id/:name
    this.$route.params.变量名 4)query 直接使用 this.$route.query query会追显示在地址栏 http://localhost:8080/#/detail?id=1 22.详情页数据 请求详情页 需要传id 根据id来返回对应的数据

    $router $route 1)router 表示路由的实例 方法都在router上
    2）route 路由对象信息 放路由的属性
    input type =check 使用v-model 的时候 出现 was assigned to but it has no setter 我们需要设置get 和set computed 属性如果是单个值 直接使用函数 如果需要get 和set 则需要写成对象
    手动给对象的属性增加监听 this.$set/Vue.set 等于给这个对象后增加的key添加了defineProperty属性
    三个参数 对象、key、value 注意事项：对象后增加的属性并不会并劫持，需要我们手动设置
    把一个组件当做一个带着事件和数据的html片段，只是我们这个组件可以随便拆分，随处使用。 拆分组件尽量遵循一个组件只实现一个功能的原则。
    vue-cli3.0配置跨域 在根目录建立一个vue.config.js(名字不能变)
    express的使用 npm install express -s 封装了req和res 有很多中间件可以配合使用 npm install cors cors跨域中间件 npm install body-parser解析数据用的express koa eggcnpm install body-parser
    解析数据调用的express koa eggcnpm install -g
    nodemon node代码修改后会自动重启，可以做到实时查看服务器代码
    参数params query
    1)params使用path的时候params会被忽略,需要手写完整带有参数的path例子
    需要进行路径拼接,:to='{path:`detail/${num}`}'
    2)query直接使用this.$route.



    'serve':'vue-cli-service serive',
    'build':'vue-cli-service build'

}

# vuex-lesson

#vuex 核心是 store 仓库  组件状态管理
例子：用户名 所有组件都要用到用户名的时候 可以使用 vuex
-- 安装 vuex npm install vuex

1. vuex 数据流流程(单向数据流)
   vuex view(视图层)-->action(事件或者动作去修改 state)-->state 映射到--->view(视图层)
2. 建立 vuex 文件
   和 main.js 同级 建立一个 store.js
3. 书写流程
   export default 后面只能跟函数或者对象
   1）导出 export default new Vuex.Store

2) 在 main.js 引入 import store from './store ' 注意 前面的 store 名字不能变
   3） 挂载在 new Vue 的实例上面

```
new Vue({
  store,
  ....
  })
```

##vuex 里面的各个属性 vuex 当做全局组件

1. strict 是否启用严格模式，一般开发环境会默认使用严格模式
   判断是否是开发环境的变 process.env.NODE_ENV
   <!-- development 开发环境  production 生产环境-->

```
strict:process.env.NODE_ENV=='development'
```

在严格模式下 只允许通过 mutations 去修改 state

2. state 相当于组件的 data state 的取值 通过 this.\$store.state.变量名

```
state:{count:1 }
取值：this.$store.state.count
```

3. getters vuex 的计算属性 computed 用来计算 state

```
 getters:{
	  Num(state){
        return state.count+"abc"
	  }
	}
取值：this.$store.getters.Num
```

actions mutations 相当于组件的 methods(方法函数)

4. mutations 只能处理同步  
   组件-->commit -->mutations-->state-->组件 1)组件调用:this.\$store.commit('自定义事件名')

```
this.$store.commit('increatment')
```

通过 commit 调用会把事件传给 mutations

2)mutations 定义 commit 传过来的同名函数,第一个参数是 state

```
mutations:{
  increatment(state){

  }
}
```

3. mutations 里面的函数可以修改 state

```
  increatment(state){
     state.count+=1
  }
```

5. actions 如果有异步操作必须通过 actions 同步异步 actions 都可以处理
   1）组件通过 dispatch 派发事件到 actions
   this.$store.dispatch('自定义事件名')
  2)actions里面定义和dispatch同名的事件，
  参数是一个解构赋值出来的commit函数，
  这个commit和组件的this.$store.commit 是等价的 3)在 actions 里面通过 commit('自定义事件名')
   提交到 mutations(因为只有通过 mutations 才能修改 state)
   4)mutations 定义和 commit 提交过来事件同名的函数 函数里面修改 state

actions 和 matuations 传参问题 1)如果是一个参数可以直接传递
2）多个参数传递对象 比如传 2 个 2,3 需要写成{a:2,v:3}

### 辅助函数

1.mapState map 映射 state 到 this 的 data 上面
组件的使用
import {mapState} from 'vuex'
放在 computed 属性里面
...mapState(可以是对象可以是数组)
2.mapGetters 映射 getters 的属性到 this 的 data 上面
import {mapGetters} from 'vuex'
放在 computed 属性里面
对象的时候只是起到改名的作用
对象的时候需要用箭头函数返回响应的 state 值

3.mapActions 映射 actions 到 this 的 methods 的对象上
会把 actions 的放法作为 this 上面的方法。
所以我们在组件里面可以和 methods 的方法一样去调用
methods 里面你定义的方法怎么调用
mapActions 拿回来的方法就可以怎么调用

我们可以当作等价于下面的写法
methods:{
...mapActions(['ActionsAdd'])
ActionsAdd(){

}
...
}

import {mapActions} from 'vuex'
用的时候放到 methods
4.mapMatutions 把 mutations 的方法映射到 this 的 methods 上面，可以通过 this[mutations 上面定义的函数]来调用对应的方法
import {mapMutations} from 'vuex'
用的时候放在 methods 上面

5.辅助函数总结
跟数据相关的都放 computed 里面 mapState mapGetters
跟方法相关的都放 methods methods 里面
mapActions mapMutations

...mapState(['username'])

<!-- //this.user=this.$store.state.username -->

##vuex 拆分
所有需要引入的都放在 index.js 里面
引入流程 1.导出（export default）-->2(import..form..)引入 -->3.在 store 对象上挂载
{  
 actions"actions
}简化成{actions}
使用常量代替事件类型
import \*as Types from './mutationsType'把所有导出的属性放在 Types 上面

#moudle 子模块
modules:{user}
state 取值
this.\$store.state.user.name
...mapState
如果文件只使用 vuex 的模块，用 vuex
const {mapState,mapGetters,mapActions}=createNamespaceHelpers('user)
如果也有全局的可以用这种方式 任何情况都可以使用下面这种方式
...mapState([])
...mapState('模块名'，['state 里面的变量'])

下载静态服务器
history and hash 模式
npm install http-server -g
在文件夹下面运行 http-server 命令即可
history aoi 要在服务器运行才可以
访问的时候一定要手动输入地址
http://127.0.0.1:8080/index.html
c.html hash 模式

##插件
plugins:[]插件的集合
官方提供的 logger 插件 只做调试用
vuex 表单处理 http://vuex.vuejs.org/zh/guide/forms.html
//项目安排 2-5 人做一个 负责人统计
博客类 easy-mock
pack.json 用来放脚本和依赖文件
//element http://element.eleme.cn/2.0/#zh-CN/component/quickstart
iview-admain http://v1.iviewui.com/docs/guide/install
vue.ant-maint http://vue.ant.design/components/input-cn/

1..路由重定向(hash 模式)
在 router.js 中配置在数组最后一项
{
path: '/_',
redirect: '/about'
}
history 模式
{
path: '/_',
redirect: '/about'，
component: () => import('./views/Home.vue'),

    }

29.keep-alive
路由对应的试图缓存

<!-- 缓存路由对应的视图 -->

    <keep-alive>
    <router-view/>
    </keep-alive>

路由元信息
{
path: '/',
name: 'home',
component: Home,
//路由元信息
meta: {
keepAlive: true
}
},

\*/ ##报错

1. can not find moudle
   路径引错 或者文件不存在(范康文)
   30.src 下面建立一个文件夹 lib 工具类
   建一个文件 axios.js
   渲染 递归组件 jwt 动态路由
   http://mpvue.com/mpvue/#vue
   https://weapp.iviewui.com/docs/guide/start
   https://tencent.github.io/wepy/document.html#/

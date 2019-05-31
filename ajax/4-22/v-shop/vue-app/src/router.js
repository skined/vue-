import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
   mode:'history',
  routes: [
    //首页
    {
      path: '/',
      name: 'home',
      component:()=>import('./views/Home.vue'),
      meta:{
        keepAlive:true
      }
    },
    // meta:{
    //   keepAlive:true
    // },
    //列表
    {
      path: '/about',
      name: 'about',
   
      component: () => import( './views/About.vue'),
    },
    //添加到购物车页面
    {
      path: '/my',
      name: 'my',
   
      component: () => import( './views/my.vue'),
    }, 
    //详情页
    {
      path: '/detail',
      name: 'detail',
      component: () => import( './views/Detail.vue')
    },
    //个人中心页面
   {
     path:'/myi',
     name:'myi',
     component:()=>import('./views/myi.vue')
   },
   {
     path:'/*',
     redirect:'/',
     component:()=>import('./views/Home.vue'),
   }
  ],
});

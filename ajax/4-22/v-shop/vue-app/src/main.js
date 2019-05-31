import Vue from 'vue';
import App from './App.vue';
import VueLazyload from 'vue-lazyload';
import router from './router';
// import store from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper';
// require styles
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper)
// Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1558076286&di=836c091f08ee10e99f6742ff5bf50c70&src=http://bpic.588ku.com/element_origin_min_pic/01/42/08/07573d66a81b8c9.jpg',
  loading: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1558076286&di=836c091f08ee10e99f6742ff5bf50c70&src=http://bpic.588ku.com/element_origin_min_pic/01/42/08/07573d66a81b8c9.jpg',
  attempt: 1
})
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

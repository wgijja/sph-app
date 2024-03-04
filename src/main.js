import Vue from 'vue'
import App from './App.vue'

//全局组件——三级联动组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'

//注册全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)


//引入路由
import router from '@/router'
// 引入vuex
import store from '@/store'

// 引入MockServe.js————mock数据
import '@/mock/mockServe'

// 引入swiper样式
import "swiper/css/swiper.css"


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  //注册路由
  router,
  // 注册vuex
  store
}).$mount('#app')


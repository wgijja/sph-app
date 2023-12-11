import Vue from 'vue'
import App from './App.vue'

//全局组件——三级联动组件
import TypeNav from '@/components/TypeNav'

//注册全局组件
Vue.component(TypeNav.name, TypeNav)


//引入路由
import router from '@/router'
// 引入vuex
import store from '@/store'

// 引入MockServe.js————mock数据
import '@/mock/mockServe'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由
  router,
  // 注册vuex
  store
}).$mount('#app')


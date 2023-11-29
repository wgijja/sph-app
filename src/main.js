import Vue from 'vue'
import App from './App.vue'

//全局组件——三级联动组件
import TypeNav from '@/pages/Home/TypeNav'

//注册全局组件
Vue.component(TypeNav.name, TypeNav)


//引入路由
import router from '@/router'


Vue.config.productionTip = false

import { reqCategoryList } from '@/api'


new Vue({
  render: h => h(App),
  //注册路由
  router
}).$mount('#app')
reqCategoryList()


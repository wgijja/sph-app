//该文件用于创建Vuex中最为核心的store
import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

//引入小仓库
import home from "./home";
import search from "./search";

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        home,
        search
    }
})
// home小仓库

import { reqCategoryList, reqGetBannerList } from "@/api"

const actions = {
    // 响应函数中的动作
    async categoryList(context) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            context.commit('CATEGORYLIST', result.data)
        }
    },

    // 获取首页轮播图的数据
    async getBannerList(context) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            context.commit('GETBANNERLIST', result.data)
        }
    }
}

const mutations = {
    // 执行
    CATEGORYLIST(state, value) {
        state.categoryList = value
    },
    GETBANNERLIST(state, value) {
        state.bannerList = value
    }
}

const state = {
    categoryList: [],
    bannerList: []
}

const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}
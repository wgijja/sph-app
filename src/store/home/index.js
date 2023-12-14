// home小仓库

import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"

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
    },

    // 获取Floor数据
    async getFloorList(context) {
        let result = await reqGetFloorList();
        if (result.code == 200) {
            context.commit('GETFLOORLIST', result.data)
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
    },
    GETFLOORLIST(state, value) {
        state.floorList = value
    }
}

const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}

const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}
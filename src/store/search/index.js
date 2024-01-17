import { reqGetSearchInfo } from "@/api"

const actions = {
    // 获取Search模块数据
    async getSearchList(content, params = {}) {
        let res = await reqGetSearchInfo(params);
        if (res.code == 200) {
            content.commit('GETSEARCHLIST', res.data)
        }
    }
}

const mutations = {
    GETSEARCHLIST(state, value) {
        state.searchList = value
    }
}

const state = {
    searchList: {}
}

const getters = {
    goodsList(state){
       return state.searchList.goodsList || [];
    },
    attrsList(state){
        return state.searchList.attrsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList || [];
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
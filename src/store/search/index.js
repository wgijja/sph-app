import { reqGetSearchInfo } from "@/api"

const actions = {
    // 获取Search模块数据
    async getSearchList(content, value = {}) {
        let res = await reqGetSearchInfo(value);
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
}

export default {
    state,
    actions,
    mutations,
    getters
}
// home小仓库

import { reqCategoryList } from "@/api"

const actions = {
    // 响应函数中的动作
    async categoryList(context) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            context.commit('CATEGORYLIST', result.data)
        }
    }
}

const mutations = {
    // 执行
    CATEGORYLIST(state, value) {
        state.categoryList = value
    }
}

const state = {
    categoryList: []
}

const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}
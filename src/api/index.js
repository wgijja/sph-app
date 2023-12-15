// 当前这个模块，用于API统一管理
import requests from "./request";
import mockRequests from './mockAjax'

// 三级联动接口
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList' })


// 获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => mockRequests.get('/banner')

// 获取Floor数据
export const reqGetFloorList = () => mockRequests.get('/floor')

// 获取搜索模块数据，注意：params至少应该是个空对象
export const reqGetSearchInfo = (params) => requests({
    url: "/list",
    method: "post",
    data: params
})
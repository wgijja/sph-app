// 当前这个模块，用于API统一管理
import requests from "./request";
import mockRequests from './mockAjax'

// 三级联动接口
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList' })


// 获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => mockRequests.get('/banner')
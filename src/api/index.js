// 当前这个模块，用于API统一管理
import requests from "./request";

// 三级联动接口
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList' })

// 引入mockjs
import  Mock  from "mockjs";

// 引入JSON数据，webpack默认对外暴露的：图片，json数据
import banner from './banner.json'
import floor from './floor.json'

// mock数据,第一个参数为请求地址，第二个参数为返回的数据
Mock.mock("/mock/banner", { code: 200, data: banner })
Mock.mock("/mock/floor", { code: 200, data: floor })
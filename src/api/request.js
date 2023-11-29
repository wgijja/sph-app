import axios from "axios";
// 引入进度条 start-进度条开始 done-进度条结束
import nprogress from "nprogress";
import 'nprogress/nprogress.css'

// 对于axios进行二次封装

//1、利用axios对象的方法create，去创建一个axios实例
//2、request 就是 axios，只不过需要稍微配置一下
const requests = axios.create({
    // 基础路径，发送请求的时候，会拼上以下路径
    baseURL: "/api",
    // 请求超时时间5S
    timeout: 5000,
})

// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    // config：配置对象，对象里有一个属性很重要，headers请求头
    nprogress.start();
    return config;
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    // 成功的回调函数：服务器相应数据回来之后，响应拦截器可以检测到，可以做一些事情
    nprogress.done();
    return res.data;
}, (error) => {
    // 失败的回调函数
    return Promise.reject(new Error('faile'))
})



// 对外暴露
export default requests;
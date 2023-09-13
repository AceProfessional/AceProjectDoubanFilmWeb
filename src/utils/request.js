// axios前端接口请求封装
// 引入axios
import axios from "axios";

// 创建axios实例
const Service = axios.create({
    // 请求地址的公共部分
    // baseURL: 'http://127.0.0.1:64202',
    baseURL:'https://mapping.fairy.host:1443/douban/api',
    // 请求的超时时间
    timeout: 3000
})

// axios拦截器
// 请求拦截器
Service.interceptors.request.use(config => {
    // config 请求的信息
    return config
}, error => {    // 错误信息
    //  抛出错误
    Promise.reject(error)
})
// 响应拦截器
Service.interceptors.response.use(res => {
    // console.log(res)
    return Promise.resolve(res)
}, error => {
    Promise.reject(error)
})

export default Service

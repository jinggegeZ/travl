import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import nprogress, { configure } from 'nprogress';
import { message } from 'ant-design-vue'

const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000
})

// 请求拦截: 每一次发请求都会做的事情
// config : 每次请求的对象
service.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  nprogress.start()
  // 前后端鉴权
  // jwt: JSON WEB TOKEN
  // 登录成功之后 后端会返回一个令牌
  const token = localStorage.getItem('token')
  if (token) {
    // 需要在请求头当中添加token 
    config.headers['Authorization'] = "Bearer " + token
    // config.headers.Authorization = "Bearer " + token
  }
  return config
}, (err: AxiosError) => {
  nprogress.done()
  console.log(err);
  return Promise.reject(err)
})

// 响应拦截: 每一次接口返回数据的时候都会做的事情
service.interceptors.response.use((res: AxiosResponse): AxiosResponse => {
  nprogress.done()
  return res.data
}, (err: AxiosError) => {
  nprogress.done()
  if (err.response && err.response.status) {
    // 错误请求的状态码
    const status = err.response.status
    if (status === 400) {
      message.error("参数错误")
    }
    if (status === 401) {
      message.error('登录过期,请重新登录')
    }
    if (status === 403) {
      message.error('没有权限')
    }
    if (status === 404) {
      message.error('接口路径错误')
    }
    if (status === 500) {
      message.error('服务器出错')
    }
    if (status === 503) {
      message.error('服务器在维护')
    }
  }
  return Promise.reject(err)
})

export default service

import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import nprogress from 


const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000
})

service.interceptors.request.use((config:AxiosRequestConfig): AxiosRequestConfig => {
  nprogress.start()
  const token = localStorage.getItem('token')
  config.headers['Auth'] = token
  return config
}, (err: AxiosError) => {
  nprogress.done()
  console.log(err)
  return Promise.reject(err)
})


service.interceptors.response.use((res: AxiosResponse): AxiosResponse => {
  nprogress.done()
  return res.data
}, (err: AxiosError) => {
  nprogress.done()
   if (err.response && err.response.status) {
    //  let status = err.response.status

   }
})

export default service
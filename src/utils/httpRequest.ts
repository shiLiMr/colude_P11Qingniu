import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";

// 创建axios实例
const services: AxiosInstance = axios.create({
  // baseURL: "/api", // 设置默认的baseURL
  baseURL: import.meta.env.VITE_APP_BASE_API, // 设置默认的baseURL
  timeout: 5000, // 设置超时时间
})
// 请求拦截器
services.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // 请求前的处理逻辑
  return config;
}, (error: AxiosError) => {
  // 请求错误时的处理逻辑
  return Promise.reject(error);
})
// 响应拦截器
services.interceptors.response.use((response: AxiosResponse) => {
  // 响应成功时的处理逻辑
  return response.data;
}, (error: AxiosError) => {
  // 响应错误时的处理逻辑
  return Promise.reject(error);
})
// 返回数据类型
type ResponceDataType<T = any> = {
  code: number,
  msg: string,
  data: T
}
// 完整请求方式
let history: string[] = []; // 保存未完成的请求接口地址
const request = <T = any>(options: AxiosRequestConfig) => {
  /**
   * 创建一个新数组，保存未完成的请求接口地址
   * 请求成功时，移除数组中已完成的接口地址
   * 若此请求未完成，则不能发送相同的请求
   * 若下一次请求的接口在数组中，则说明当前请求未完成，此时不能再次发送请求
   *
   */
  const url =  options.url // 获取请求的接口地址
  if(history.includes(url!)){
    return new Error('重复请求 !')
  }
  url && history.push(url) // 将请求的接口地址添加到数组中

  return services.request<T, ResponceDataType<T>>({

    ...options,
    [options.method === 'GET' ? 'params' : 'data']: options.data
  }).finally(() => {
    // 请求完成后，移除数组中已完成的接口地址
    history = history.filter(item => item !== url)
  })
}
// get
export const get = <T = any>(url: string, data?: Object) => {
  return request<T>({ url, method: 'GET', data })
}
// post
export const post = <T = any>(url: string, data?: Object) => {
  return request<T>({ url, method: 'POST', data })
}
// put
export const put = <T = any>(url: string, data?: Object) => {
  return request<T>({ url, method: 'PUT', data })
}
// delete
export const del = <T = any>(url: string, data?: Object) => {
  return request<T>({ url, method: 'DELETE', data })
}

export default request

import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";

// 创建axios实例
const services: AxiosInstance = axios.create({
  baseURL: "/api", // 设置默认的baseURL
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
const request = <T = any>(options: AxiosRequestConfig) => {
  return services.request<T, ResponceDataType<T>>({
    ...options,
    [options.method === 'GET' ? 'params' : 'data']: options.data
  })
}
// // get
// export const get = <T = any>(url: string, data?: Object) => {
//   return request<T>({ url, method: 'GET', data })
// }
// // post
// export const post = <T = any>(url: string, data?: Object) => {
//   return request<T>({ url, method: 'POST', data })
// }
// // put
// export const put = <T = any>(url: string, data?: Object) => {
//   return request<T>({ url, method: 'PUT', data })
// }
// // delete
// export const del = <T = any>(url: string, data?: Object) => {
//   return request<T>({ url, method: 'DELETE', data })
// }

export default  request

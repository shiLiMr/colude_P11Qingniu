import request from '@/utils/httpRequest'

// 测试接口
export const testApi = () => request({
  url: '/public/test', method: 'get', params: {
    name: "<p onclick='alert(123)'>heklo</p>",
  }
}, {
  isPurify: true
})

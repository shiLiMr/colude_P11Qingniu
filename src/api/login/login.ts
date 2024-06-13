
import request from "@/utils/httpRequest"
import type { LoginParams, UserInforType } from "./logintype";

// 登录


export function loginApi(params: LoginParams) {
  return request({
    url: "/user/login",
    method: "post",
    data: params,
  });
}


// 获取用户信息
export function getUserInfoApi() {
  return request<UserInforType>({
    url: "/user/info",
    method: "get",
  });
}

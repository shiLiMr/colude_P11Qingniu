
import request from "@/utils/httpRequest"

// 登录
interface LoginParams {
  username: string;
  password: string;
}

export function loginApi(params: LoginParams) {
  return request({
    url: "/user/login",
    method: "post",
    data: params,
  });
}

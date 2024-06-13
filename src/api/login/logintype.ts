// 登录参数类型
export interface LoginParams {
  username: string;
  password: string;
}


// 用户信息 返回数据类型
export interface UserInforType {
  age: number;
  createdAt: string;
  deviceid: string;
  gender: number;
  grade: string;
  id: number;
  num: number;
  phone: string;
  province: string;
  role: Role;
  school: string;
  status: number;
  type: number;
  updatedAt: string;
  username: string;
}

export interface Role {
  createdAt: string;
  id: number;
  remark: string;
  rolename: string;
  updatedAt: string;
}

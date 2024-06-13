import { getUserInfoApi } from '@/api/login/login'
import type { UserInforType } from '@/api/login/logintype'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore(
  'auth',
  () => {
    // token
    const token = ref<string>('')
    const userInfo = ref<UserInforType | null>(null)

    // 存储token
    const setToken = (value: string) => {
      token.value = value
    }

    // 获取用户信息
    const getUserInfor = async () => {
      try {
        const res: any = await getUserInfoApi()
        // console.log(res);
        userInfo.value = res.data
        return res
      } catch (error) {
        console.log(error);

      }
    }

    // 清空 token 用户信息
    const resetUser = () => {
      token.value = ''
      userInfo.value = null
    }

    return {
      token,
      setToken,
      getUserInfor,
      userInfo,
      resetUser
    }
  },
  {
    persist: {
      storage: localStorage,
      paths: ['token']
    },
  },
)

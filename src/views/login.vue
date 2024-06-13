<template>
  <div class="login">
    <div class="loginmain">
      <div class="title">用户登录</div>
      <p class="context">青牛前端后台管理系统</p>
      <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
        status-icon
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="输入用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="输入用户密码" show-password />
        </el-form-item>

        <el-form-item>
          <el-button style="width: 100%" :loading="loading" type="primary" @click="sunmitForm">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { loginApi } from '@/api/login/login'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useAuthStore } from '@/stores/auth'

const loading = ref(false) // 按钮加载

import { type FormInstance, type FormRules } from 'element-plus'
interface loginPar {
  // 登录 类型
  username: string
  password: string
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<loginPar>({
  // 登录 数据
  username: 'admin',
  password: 'abc12345'
})
const rules = reactive<FormRules<loginPar>>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const sunmitForm = () => {
  //登录按钮
  ruleFormRef.value?.validate(async (valid: boolean) => {
    const store = useAuthStore()

    if (!valid) return
    loading.value = true
    try {
      const res:any = await loginApi(ruleForm)
      console.log(res)
      // 登录成功 跳转页面
      router.push('/')
      // 登录成功 存储token
      store.setToken(res.data)
      // localStorage.setItem('token', res.data.token)
    } catch (err) {
      console.log(err)
    } finally {
      // 成功失败都会执行
      loading.value = false
    }
  })
}
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  // background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginmain {
    width: 400px;
    text-align: center;

    .title {
      font-size: 20px;
      padding: 12px;
    }
    .context {
      font-size: 13px;
      padding: 6px;
    }
  }
}
</style>

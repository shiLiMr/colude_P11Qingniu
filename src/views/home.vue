<template>
  <div>
    面板
    <el-button @click="test">test测试</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { testApi } from '@/api/test'

// const a = ref(false) // false 允许请求 true不允许请求

const test = async () => {
  try {
    // if (a.value) return
    // 请求
    // a.value = true
    const res = await testApi()
    console.log(res)
    // a.value = false
    // 请求结束
  } catch (err) {
    console.log(err)
  }
}
</script>
<style lang="scss" scoped></style>

// 将动态路由 添加到路由表中
import { nextTick } from 'vue'
import type { RouteRecordRaw, Router } from 'vue-router'

interface EagerLoadedFunc {
  default: RouteRecordRaw
}
type EagerLoadedModules = Record<string, EagerLoadedFunc>

//1. 获取 modules目录下所有的动态路由文件
const routeFiles: EagerLoadedModules = import.meta.glob('./modules/*.ts', { eager: true })
console.log('routeFiles', routeFiles)

//2.初始化一个变量 ，保存遍历出来的路由
const routeConfigurast: RouteRecordRaw[] = []
// 3. 遍历所有文件路由
Object.keys(routeFiles).forEach((key: string) => {
  console.log(routeFiles[key]);

  routeFiles[key].default && routeConfigurast.push(routeFiles[key].default)
})
// 4.动态添加路由
export const useMiddleware = (router: Router) => {
  router.beforeEach((to, from, next) => {
    routeConfigurast.forEach((routeModule: RouteRecordRaw) => {
      router.addRoute(routeModule)
    })
    nextTick(() => {
      next()
    })
  })
}

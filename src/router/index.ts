import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
// 导入动态路由
import { useMiddleware } from './middleware'

// 静态路由 任何用户都可以访问的页面
// 动态路由 拥有对应权限才能访问的页面
const createRouteres: RouteRecordRaw[] = [
  // 路由重定向
  {
    path: '/',
    redirect: '/dashboard/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found404.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: { title: '首页' },
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: { title: '面板' },
        component: () => import('@/views/home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: createRouteres,
  // 路由滚动行为
  scrollBehavior() {
    return { top: 0 }
  }
})
// 调用动态路由方法
useMiddleware(router)

export default router

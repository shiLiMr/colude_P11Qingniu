// 权限管理的路由
export default {
  path: '/permission',
  name: 'Permission',
  meta: { title: '权限管理' },
  component: () => import('@/layouts/index.vue'),
  children: [
    {
      path: 'user',
      name: 'User',
      meta: { title: '用户管理' },
      component: () => import('@/views/userManager/index.vue')
    },
    {
      path: 'role',
      name: 'Role',
      meta: { title: '角色管理' },
      component: () => import('@/views/roleManager/index.vue')
    },
    {
      path: 'menu',
      name: 'Menu',
      meta: { title: '菜单管理' },
      component: () => import('@/views/menuManager/index.vue')
    }
  ]
}

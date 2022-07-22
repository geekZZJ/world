import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('../views/Home') },
  { path: '/about', name: 'about', component: () => import('../views/About') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

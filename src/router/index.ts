import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  }, {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/cart/index.vue')
  }, {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/user/index.vue')
  }, {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

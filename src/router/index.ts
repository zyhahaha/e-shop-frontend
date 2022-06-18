import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
  }, {
    path: '/registered',
    name: 'registered',
    component: () => import(/* webpackChunkName: "registered" */ '../views/registered/index.vue')
  }, {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  }, {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/cart/index.vue')
  },{
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/user/index.vue')
  },{
    path: '/goods',
    name: 'goods',
    component: () => import(/* webpackChunkName: "goods" */ '../views/goods/index.vue')
  }, {
    path: '/coupon',
    name: 'coupon',
    component: () => import(/* webpackChunkName: "coupon" */ '../views/coupon/index.vue')
  }, {
    path: '/coupon/get',
    name: 'couponGet',
    component: () => import(/* webpackChunkName: "get" */ '../views/coupon/get.vue')
  },{
    path: '/submitorder',
    name: 'submitorder',
    component: () => import(/* webpackChunkName: "submitorder" */ '../views/submitorder/index.vue')
  },{
    path: '/payment',
    name: 'payment',
    component: () => import(/* webpackChunkName: "payment" */ '../views/payment/index.vue')
  },{
    path: '/address',
    name: 'address',
    component: () => import(/* webpackChunkName: "address" */ '../views/address/index.vue')
  },
  // 二级页面
  {
    path: '/user/order',
    name: 'user-order',
    component: () => import(/* webpackChunkName: "user-order" */ '../views/user/order/index.vue')
  }, {
    path: '/user/order/detail',
    name: 'orderdetail',
    component: () => import(/* webpackChunkName: "orderdetail" */ '../views/user/order/detail/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

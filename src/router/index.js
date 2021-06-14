import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [ 
  {
    path: '/brand',
    name: 'Brand',
    component: () => import('@/views/Brand.vue'),
    meta: {
      title: '安徽省蔬菜区块链可信溯源系统'
    }
  },
  {
    path:'/',
    name:'Brand',             
    redirect:"/brand"
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '安徽省蔬菜区块链可信溯源系统'
    }
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

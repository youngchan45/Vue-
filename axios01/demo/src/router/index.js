import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //在項目中一般使用這種異步加載的方法，即當訪問到這個路徑時，才加載這個組件
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/two',
    name: 'two',
    component: () => import(
      '../views/two.vue'
    )
  },
  {
    path:'/three',
    name:'three',
    component:()=>import(
      '../views/three.vue'
    )
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { Layout } from 'ant-design-vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
   
  {
    path:'',
    name:'layout',
    component: Layout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
    ]

    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

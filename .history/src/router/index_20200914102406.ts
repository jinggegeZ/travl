import { Layout } from 'ant-design-vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import layout1 from '../views/layout/layout1.vue'

const routes: Array<RouteRecordRaw> = [
   {
     path:'/',
     redirect:'/Home'
   },
  {
    path:'',
    name:'layout',
    component: layout1,
    children:[
      {
        path: '/Home',
        name: 'Home',
        component: Home,
        meta: {
          title:'首页'
        }
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue'),
        meta: {
          title:'首页'
        }
      },
    ]

    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

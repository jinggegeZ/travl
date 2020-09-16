import { Layout } from 'ant-design-vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout/layout.vue'

const routes: Array<RouteRecordRaw> = [
   {
     path:'',
     redirect:'/Home'
   },
  {
    path:'',
    name:'layout',
    component: layout,
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
          title:'登录页'
        }
      },
      {
        path: '/air',
        name: 'air',
        component: () => import('../views/air/air.vue'),
        meta: {
          title:'机票'
        }
      },
      {
        path: '/hotel',
        name: 'hotel',
        component: () => import('../views/hotel/hotel.vue'),
        meta: {
          title:'酒店'
        }
      },
      {
        path: '/post',
        name: 'post',
        component: () => import('../views/post/post.vue'),
        meta: {
          title:'旅游'
        }
      },
      {
        path: '/post/create',
        name: '/post/create',
        component: () => import('../views/create/create.vue'),
        meta: {
          title:'编辑页'
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

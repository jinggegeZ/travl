import { Layout } from 'ant-design-vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
   {
     path:'/',
     redirect:'/Home'
   },
  {
    path:'',
    name:'layout',
    component: Layout,
    children:[
      {
        path: '/Home',
        name: 'Home',
        component: Home,
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

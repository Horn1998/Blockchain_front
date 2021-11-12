import { createRouter, createWebHistory } from 'vue-router'
import loginRegister from '../views/loginRegister/loginRegister.vue'
import BlockSearch from '../views/blockSearch/blockSearch.vue'
import Layout from "../layout/index"
import Home from "../views/home/index"

const routes = [
  {
    path:'/',
    name:'login',
    component: loginRegister,
  }, 
  {
    path:"/layout",
    redirect: '/home',
    component: Layout,
    children:[
      {
        path:"/home",
        component: Home
      },{
        path:"/blockSearch",
        component: BlockSearch
      }
    ]
  },
]

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

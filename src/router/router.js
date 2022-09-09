import Home from '@/pages/Home'
import Routing from '@/pages/forRouter'
import ThirdPage from "@/pages/thirdPage";
import {createRouter, createWebHistory} from "vue-router"

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/rout',
    component: Routing,
  },
  {
    path: '/third',
    component: ThirdPage
  }
]

const rounter = createRouter({
  routes,
  history: createWebHistory()
})

export default rounter

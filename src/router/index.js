import { createRouter, createWebHistory } from 'vue-router'
import LoopMachine from '../views/LoopMachine.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoopMachine
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from "@/views/AuthPage"
import GamePage from "@/views/GamePage"
const routes = [
  {
    path: '/',
    name: 'auth',
    component: AuthPage
  },
  {
    path: '/game',
    name: 'game',
    component: GamePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

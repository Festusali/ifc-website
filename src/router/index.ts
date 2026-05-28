import HomePage from '@/views/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

/*
TODO: Basic Routes Before Launch

- Home
- Shop
- Categories
- About
- Contact
*/

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { title: 'Immaeby Fashion Closet | Stylish Unisex Fashion For Every Closet' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

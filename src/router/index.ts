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

  // 404 Page Not Found
  {
    path: '/404',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue'),
    meta: { title: '404 - Page Not Found | Immaeby Fashion Closet' },
  },
  // Catch-All Redirect
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // Browser back/forward support
    if (savedPosition) {
      return savedPosition
    }

    // Anchor scrolling
    if (to.hash) {
      return {
        el: to.hash,
        top: 90,
        behavior: 'smooth',
      }
    }

    // Default scroll to top
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

// Dynamic Page Titles
router.beforeEach((to) => {
  document.title = (to.meta.title as string) || 'Immaeby Fashion Closet'
})

export default router

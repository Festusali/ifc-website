import HomePage from '@/views/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

/*
TODO: Basic Routes Before Launch

- Home
- Shop
- Categories
- Category Detail
- Product Detail
- Cart
- Checkout
- About
- Contact
*/

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/views/ShopPage.vue'),
  },
  {
    path: '/shop/:slug',
    name: 'product-detail',
    component: () => import('@/views/ProductDetailPage.vue'),
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('@/views/CategoriesPage.vue'),
  },
  {
    path: '/categories/:slug',
    name: 'category-detail',
    component: () => import('@/views/CategoryDetailPage.vue'),
  },

  // 404 Page Not Found
  {
    path: '/404',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue'),
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

export default router

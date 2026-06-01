import { productsSchema } from '@/schemas/product'
import { products as dummyProducts } from '@/data/shop'
import type { Product } from '@/schemas/product'
import { defineStore } from 'pinia'
import { useCategoriesStore } from './categories'

// Check if categories are already loaded, if not, fetch them
const categoriesStore = useCategoriesStore()
if (!categoriesStore.categories.length) {
  categoriesStore.fetchCategories?.()
}

export const useProductsStore = defineStore('products', {
  state: () => ({
    // Core data
    products: [] as Product[],
    loading: false,
  }),

  getters: {
    totalProducts: (state) => state.products.length,
  },

  actions: {
    async fetchProducts() {
      try {
        this.loading = true

        const validatedProducts = productsSchema.parse(dummyProducts)
        this.products = validatedProducts
      } catch (error) {
        console.error('Product validation failed:', error)
      } finally {
        this.loading = false
      }
    },

    getProductBySlug(slug: string) {
      return this.products.find((product) => product.slug === slug)
    },

    getProductsByCategory(categoryId: string) {
      return this.products.filter((product) => product.categoryIds.includes(categoryId))
    },
  },
})

import { productsSchema } from '@/schemas/product'
import { products as dummyProducts } from '@/data/shop'
import type { Product } from '@/schemas/product'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    loading: false,
  }),

  getters: {
    totalProducts: (state) => state.products.length,
    featuredProducts: (state) => state.products.filter((product) => product.featured),
    bestSellerProducts: (state) => state.products.filter((product) => product.bestSeller),
    newArrivalProducts: (state) => state.products.filter((product) => product.newArrival),
    productsByCategory: (state) => {
      return (categoryId: string) =>
        state.products.filter((product) => product.categoryIds.includes(categoryId))
    },
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

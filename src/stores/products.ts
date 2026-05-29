import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { productsSchema } from '@/schemas/product'
import { products as dummyProducts } from '@/data/shop'

import type { Product } from '@/types/product'

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const featuredProducts = computed(() => products.value.filter((product) => product.featured))
  const bestSellerProducts = computed(() => products.value.filter((product) => product.bestSeller))
  const newArrivalProducts = computed(() => products.value.filter((product) => product.newArrival))
  const inStockProducts = computed(() => products.value.filter((product) => product.inStock))

  const fetchProducts = async () => {
    try {
      loading.value = true

      const validatedProducts = productsSchema.parse(dummyProducts)
      products.value = validatedProducts
    } catch (error) {
      console.error('Product validation failed:', error)
    } finally {
      loading.value = false
    }
  }

  const getProductBySlug = (slug: string) => {
    return products.value.find((product) => product.slug === slug)
  }

  return {
    products,
    loading,
    featuredProducts,
    bestSellerProducts,
    newArrivalProducts,
    inStockProducts,
    fetchProducts,
    getProductBySlug,
  }
})

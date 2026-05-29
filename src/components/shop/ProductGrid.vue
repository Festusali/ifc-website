<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'
import ProductCard from '@/components/shop/ProductCard.vue'

const productsStore = useProductsStore()

const products = computed(() => productsStore.products)
const isLoading = computed(() => productsStore.loading)
const hasProducts = computed(() => products.value.length > 0)

onMounted(() => {
  // In case you later swap to API, keep this pattern ready
  if (!productsStore.products.length) {
    productsStore.fetchProducts?.()
  }
})
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <!-- Loading State -->
    <div v-if="isLoading" class="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="n in 10" :key="n" class="h-65 bg-gray-200 animate-pulse rounded-xl" />
    </div>

    <!-- Empty State -->
    <div v-else-if="!hasProducts" class="text-center py-20 text-gray-500">
      No products available.
    </div>

    <!-- Product Grid -->
    <div
      v-else
      class="grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>

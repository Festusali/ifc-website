<script setup lang="ts">
import type { Product } from '@/schemas/product'
import ProductCard from '@/components/shop/ProductCard.vue'

defineProps<{
  products: Product[]
  loading?: boolean
}>()
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <!-- Loading State -->
    <div v-if="loading" class="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="n in 10" :key="n" class="h-65 bg-gray-200 animate-pulse rounded-xl" />
    </div>

    <div v-else class="grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'
import ProductCard from '@/components/shop/ProductCard.vue'
import LoadMore from './LoadMore.vue'

const productsStore = useProductsStore()

const products = computed(() => productsStore.visibleProducts)
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
    <div v-else class="grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>

    <!-- PRODUCT COUNT -->
    <div class="text-center mt-12">
      <div class="text-sm text-slate-500">
        Showing
        <span class="font-semibold text-secondary">
          {{ productsStore.visibleProducts.length }}
        </span>
        of
        <span class="font-semibold text-secondary">
          {{ productsStore.filteredProducts.length }}
        </span>
        products
      </div>
    </div>

    <LoadMore
      :has-more="productsStore.hasMoreProducts"
      :loading="productsStore.loading"
      @load-more="productsStore.loadMoreProducts"
    />
  </section>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { IconArrowRight } from '@tabler/icons-vue'
import { computed, onMounted } from 'vue'
import ProductCard2 from '../shop/ProductCard2.vue'

const productsStore = useProductsStore()
const products = computed(() =>
  productsStore.newArrivalProducts.filter((p) => p.stock > 0).slice(0, 4),
)

onMounted(() => {
  if (!productsStore.products.length) {
    productsStore.fetchProducts?.()
  }
})
</script>

<template>
  <section id="new-arrival" class="relative overflow-hidden bg-soft/10 py-24">
    <!-- Decorative Background -->
    <div class="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />

    <div class="container-base relative z-10">
      <!-- Header -->
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-2xl">
          <p class="mb-4 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            New Arrivals
          </p>

          <h2 class="font-heading text-4xl leading-tight font-bold md:text-5xl">
            Fresh Styles Just Landed
          </h2>

          <p class="mt-6 text-lg">
            Discover newly added fashion pieces carefully curated for elegance, comfort and everyday
            confidence.
          </p>
        </div>

        <!-- View All -->
        <button
          v-if="products.length"
          class="group inline-flex items-center text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
        >
          View All Products

          <IconArrowRight :size="18" class="ml-2" />
        </button>
      </div>

      <!-- Products -->
      <template v-if="products.length">
        <div class="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <ProductCard2 v-for="product in products" :key="product.id" :product="product" />

          <!-- Bottom CTA -->
          <div class="mt-16 flex justify-center">
            <button class="primary-btn">
              Explore Full Collection

              <IconArrowRight :size="18" class="ml-2" />
            </button>
          </div>
        </div>
      </template>
      <div v-else>
        <p class="mt-12 p-22 bg-white/60 rounded-2xl text-center text-lg text-muted-foreground">
          No new arrival products available at the moment.
        </p>
      </div>
    </div>
  </section>
</template>

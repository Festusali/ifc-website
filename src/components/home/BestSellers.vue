<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { IconArrowRight, IconFlame } from '@tabler/icons-vue'
import { computed, onMounted } from 'vue'
import ProductCard2 from '../shop/ProductCard2.vue'

const productsStore = useProductsStore()
const products = computed(() =>
  productsStore.bestSellerProducts.filter((p) => p.stock > 0).slice(0, 8),
)

onMounted(() => {
  if (!productsStore.products.length) {
    productsStore.fetchProducts?.()
  }
})
</script>

<template>
  <section class="relative overflow-hidden bg-soft/10 py-24">
    <!-- Background Glow -->
    <div class="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

    <div class="container-base relative z-10">
      <!-- Header -->
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-2xl">
          <!-- Badge -->
          <div
            class="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            <IconFlame :size="18" />

            <span> Customer Favorites </span>
          </div>

          <!-- Heading -->
          <h2 class="font-heading text-4xl leading-tight font-bold md:text-5xl">
            Best Selling Collections
          </h2>

          <!-- Description -->
          <p class="mt-6 text-lg">
            Explore our most loved fashion pieces carefully selected by customers for elegance,
            comfort and timeless style.
          </p>
        </div>

        <!-- CTA -->
        <button
          v-if="products.length"
          class="group inline-flex items-center text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
        >
          Browse Best Sellers

          <IconArrowRight :size="18" class="ml-2" />
        </button>
      </div>

      <!-- PRODUCTS -->
      <template v-if="products.length">
        <div class="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <ProductCard2
            v-for="(product, index) in products"
            :key="product.id"
            :product="product"
            :index="index"
          />
        </div>

        <!-- Bottom CTA -->
        <div class="mt-16 flex justify-center">
          <button class="primary-btn">
            Shop Trending Products

            <IconArrowRight :size="18" class="ml-2" />
          </button>
        </div>
      </template>
      <div v-else>
        <p class="mt-12 p-22 bg-white/60 rounded-2xl text-center text-lg text-muted-foreground">
          No best-selling products available at the moment.
        </p>
      </div>
    </div>
  </section>
</template>

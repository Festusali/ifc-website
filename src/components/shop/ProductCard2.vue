<script setup lang="ts">
import type { Product } from '@/schemas/product'
import { IconEye, IconHeart, IconShoppingCartPlus, IconStarFilled } from '@tabler/icons-vue'

defineProps<{
  product: Product
  index?: number
}>()
</script>

<template>
  <RouterLink
    :to="{ name: 'product-detail', params: { slug: product.slug } }"
    :key="product.id"
    v-motion
    :initial="{
      opacity: 0,
      y: 60,
    }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 700,
        delay: index !== undefined ? index * 80 : 0,
      },
    }"
    class="group relative overflow-hidden rounded-4xl border border-black/5 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
  >
    <!-- IMAGE -->
    <div class="relative overflow-hidden">
      <img
        :src="product.image"
        :alt="product.name"
        class="h-80 md:h-70 lg:h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <!-- Top Actions -->
      <div class="absolute top-4 right-4 flex flex-col gap-3">
        <button
          class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <IconHeart :size="20" />
        </button>

        <button
          class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <IconEye :size="20" />
        </button>
      </div>

      <!-- Best Seller Tag -->
      <div
        class="absolute top-4 left-4 rounded-full bg-primary px-4 py-2 text-xs font-semibold tracking-[0.15em] text-white uppercase shadow-lg"
      >
        Best&nbsp;Seller
      </div>

      <!-- Add To Cart -->
      <button
        class="absolute bottom-5 left-1/2 flex -translate-x-1/2 translate-y-10 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-secondary opacity-0 shadow-2xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <IconShoppingCartPlus :size="18" />

        Add&nbsp;to&nbsp;Cart
      </button>
    </div>

    <!-- CONTENT -->
    <div class="p-6">
      <!-- Brand -->
      <p class="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
        {{ product.brand }}
      </p>

      <!-- Product Name -->
      <h3 class="mt-3 font-heading text-2xl font-semibold leading-snug">
        {{ product.name }}
      </h3>

      <!-- Bottom -->
      <div class="mt-6 flex items-center justify-between">
        <!-- Price -->
        <div>
          <p class="text-2xl font-bold text-secondary">
            {{ product.price }}
          </p>
        </div>

        <!-- Rating -->
        <div class="flex items-center gap-1 rounded-full bg-[#f8f5f2] px-3 py-1.5">
          <IconStarFilled :size="16" class="text-amber-500" />

          <span class="text-sm font-semibold">
            {{ product.rating }}
          </span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

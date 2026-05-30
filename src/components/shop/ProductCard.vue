<script setup lang="ts">
import { formatPrice } from '@/data/shop'
import type { Product } from '@/types/product'
import { IconEye, IconHeart, IconShoppingBagPlus, IconStarFilled } from '@tabler/icons-vue'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div
    class="group relative overflow-hidden rounded-2xl border border-black/5 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
  >
    <!-- IMAGE -->
    <div class="relative overflow-hidden bg-[#f8f5f2]">
      <img
        :src="product.image"
        :alt="product.name"
        class="h-40 md:h-50 w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-linear-to-t from-black/55 via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <!-- BADGES -->
      <div class="absolute top-3 left-3 flex flex-col gap-2">
        <!-- NEW -->
        <div
          v-if="product.newArrival"
          class="rounded-full bg-white px-2 py-1 text-[11px] font-semibold tracking-[0.15em] text-secondary uppercase shadow-lg"
        >
          New
        </div>

        <!-- BEST SELLER -->
        <div
          v-if="product.bestSeller"
          class="rounded-full bg-primary px-2 py-1 text-[11px] font-semibold tracking-[0.15em] text-white uppercase shadow-lg"
        >
          Best Seller
        </div>
      </div>

      <!-- ACTIONS -->
      <div class="absolute top-3 right-3 flex flex-col gap-2">
        <!-- Wishlist -->
        <button
          class="flex h-9 w-9 translate-y-3 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white hover:text-secondary"
        >
          <IconHeart :size="20" />
        </button>

        <!-- Preview -->
        <button
          class="flex h-9 w-9 translate-y-3 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 shadow-xl backdrop-blur-xl transition-all delay-75 duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white hover:text-secondary"
        >
          <IconEye :size="20" />
        </button>
      </div>

      <!-- ADD TO CART -->
      <div class="absolute inset-x-0 bottom-1 flex justify-center px-3">
        <button
          class="flex w-full max-w-40 translate-y-10 items-center justify-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-secondary opacity-0 shadow-2xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-primary hover:text-white"
        >
          <IconShoppingBagPlus :size="18" />
          Add&nbsp;to&nbsp;Cart
        </button>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="p-2">
      <!-- CATEGORY -->
      <p class="truncate text-xs font-semibold tracking-[0.18em] text-primary uppercase">
        {{ product.category }}
      </p>

      <!-- PRODUCT NAME -->
      <h3
        class="mt-1 line-clamp-2 font-heading leading-snug font-semibold text-secondary transition-colors duration-300 group-hover:text-primary"
      >
        {{ product.name }}
      </h3>

      <!-- BOTTOM -->
      <div class="mt-3 flex items-center justify-between">
        <!-- PRICE -->
        <div>
          <p class="text-2xl font-bold text-secondary">
            <span class="text-xs">{{ product?.currencySymbol }}</span>
            {{ formatPrice(product.price) }}
          </p>
        </div>

        <!-- RATING -->
        <div class="flex items-center gap-1 rounded-full bg-[#f8f5f2] px-3 py-1.5">
          <IconStarFilled :size="16" class="text-amber-500" />

          <span class="text-sm font-semibold text-secondary">
            {{ product.rating }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

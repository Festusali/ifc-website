<script setup lang="ts">
import { computed } from 'vue'
import { formatPrice } from '@/data/shop'
import type { Product } from '@/schemas/product'

import { IconEye, IconHeart, IconShoppingBagPlus, IconStarFilled } from '@tabler/icons-vue'

const props = defineProps<{
  product: Product
}>()

const isOutOfStock = computed(() => props.product.stock <= 0)

const hasDiscount = computed(
  () =>
    !!props.product.compareAtPrice &&
    Number(props.product.compareAtPrice) > Number(props.product.price),
)
</script>

<template>
  <router-link
    :to="{ name: 'product-detail', params: { slug: product.slug } }"
    class="text-decoration-none"
  >
    <div
      class="group relative overflow-hidden rounded-2xl border border-black/5 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      <!-- IMAGE -->
      <div class="relative overflow-hidden bg-[#f8f5f2]">
        <img
          :src="product.thumbnail || product.image"
          :alt="product.name"
          class="h-40 md:h-50 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-linear-to-t from-black/55 via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <!-- BADGES -->
        <div class="absolute top-3 left-3 flex flex-col gap-2">
          <!-- OUT OF STOCK -->
          <div
            v-if="isOutOfStock"
            class="rounded-full bg-red-500 px-2 py-1 text-[11px] font-semibold tracking-[0.15em] text-white uppercase shadow-lg"
          >
            Sold Out
          </div>

          <div
            v-if="hasDiscount && !isOutOfStock"
            class="rounded-full bg-green-600 px-2 py-1 text-[11px] font-semibold tracking-[0.15em] text-white uppercase shadow-lg"
          >
            Sale
          </div>

          <!-- NEW -->
          <div
            v-if="product.newArrival && !isOutOfStock"
            class="rounded-full bg-white px-2 py-1 text-[11px] font-semibold tracking-[0.15em] text-secondary uppercase shadow-lg"
          >
            New
          </div>

          <!-- BEST SELLER -->
          <div
            v-if="product.bestSeller && !isOutOfStock"
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
            :disabled="isOutOfStock"
            class="flex w-full max-w-40 items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-all duration-500"
            :class="
              isOutOfStock
                ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                : 'bg-white text-secondary shadow-2xl group-hover:translate-y-0 group-hover:opacity-100 hover:bg-primary hover:text-white'
            "
          >
            <IconShoppingBagPlus :size="18" />
            {{ isOutOfStock ? 'Out&nbsp;of&nbsp;Stock' : 'Add&nbsp;to&nbsp;Cart' }}
          </button>
        </div>
      </div>

      <!-- CONTENT -->
      <div class="p-2">
        <!-- CATEGORY -->
        <p class="truncate text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          {{ product.brand }}
        </p>

        <!-- PRODUCT NAME -->
        <h3
          class="mt-1 line-clamp-2 font-heading leading-snug font-semibold text-secondary transition-colors duration-300 group-hover:text-primary"
        >
          {{ product.name }}
        </h3>

        <!-- SHORT DESCRIPTION -->
        <p v-if="product.shortDescription" class="mt-1 line-clamp-2 text-sm text-gray-500">
          {{ product.shortDescription }}
        </p>

        <!-- BOTTOM -->
        <div class="mt-3 flex items-center justify-between">
          <!-- PRICE -->
          <div>
            <div>
              <p class="text-2xl font-bold text-secondary">₦{{ formatPrice(product.price) }}</p>

              <p v-if="hasDiscount" class="text-sm text-gray-400 line-through">
                ₦{{ formatPrice(product.compareAtPrice!) }}
              </p>
            </div>
          </div>

          <!-- RATING -->
          <div class="flex items-center gap-1 rounded-full bg-[#f8f5f2] px-3 py-1.5">
            <IconStarFilled :size="16" class="text-amber-500" />

            <span class="text-sm font-semibold text-secondary">
              {{ product.rating }}
            </span>

            <span class="text-xs text-gray-500"> ({{ product.reviewCount }}) </span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

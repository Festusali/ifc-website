<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  IconHeart,
  IconMinus,
  IconPlus,
  IconShoppingBagPlus,
  IconStarFilled,
  IconTruck,
  IconShieldCheck,
  IconRefresh,
} from '@tabler/icons-vue'

import type { Product } from '@/schemas/product'

const props = defineProps<{
  product: Product
}>()

const quantity = ref(1)

const selectedColor = ref(props.product.colors?.[0] ?? '')

const selectedSize = ref(props.product.sizes?.[0] ?? '')

const inStock = computed(() => props.product.stock > 0)

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}
</script>

<template>
  <div class="flex flex-col">
    <!-- BRAND -->
    <p class="text-sm font-semibold tracking-[0.25em] text-primary uppercase">
      {{ product.brand }}
    </p>

    <!-- TITLE -->
    <h1 class="mt-3 font-heading text-3xl font-semibold text-secondary md:text-4xl">
      {{ product.name }}
    </h1>

    <!-- RATING -->
    <div class="mt-5 flex flex-wrap items-center gap-4">
      <div class="flex items-center gap-1">
        <IconStarFilled class="text-amber-500" :size="18" />

        <span class="font-semibold text-secondary">
          {{ product.rating.toFixed(1) }}
        </span>
      </div>

      <span class="text-sm text-slate-500">
        {{ product.reviewCount }}
        reviews
      </span>

      <span class="h-1 w-1 rounded-full bg-slate-300" />

      <span :class="inStock ? 'text-emerald-600' : 'text-red-500'" class="font-medium">
        {{ inStock ? 'In Stock' : 'Out of Stock' }}
      </span>
    </div>

    <!-- PRICE -->
    <div class="mt-8 flex flex-wrap items-center gap-4">
      <span class="text-4xl font-bold text-secondary">
        {{ product.currency }}
        {{ product.price }}
      </span>

      <span v-if="product.compareAtPrice" class="text-xl text-slate-400 line-through">
        {{ product.currency }}
        {{ product.compareAtPrice }}
      </span>
    </div>

    <!-- DESCRIPTION -->
    <p class="mt-8 leading-relaxed text-slate-600">
      {{ product.shortDescription || product.description }}
    </p>

    <!-- COLORS -->
    <section v-if="product.colors.length" class="mt-10">
      <div class="mb-4 flex items-center justify-between">
        <h3 class="text-sm font-semibold tracking-[0.15em] uppercase">Color</h3>

        <span class="text-sm text-slate-500">
          {{ selectedColor }}
        </span>
      </div>

      <div class="flex flex-wrap gap-3">
        <button
          v-for="color in product.colors"
          :key="color"
          type="button"
          class="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300"
          :class="
            selectedColor === color
              ? 'border-primary bg-primary text-white'
              : 'border-black/10 hover:border-primary/20'
          "
          @click="selectedColor = color"
        >
          {{ color }}
        </button>
      </div>
    </section>

    <!-- SIZES -->
    <section v-if="product.sizes.length" class="mt-8">
      <div class="mb-4 flex items-center justify-between">
        <h3 class="text-sm font-semibold tracking-[0.15em] uppercase">Size</h3>

        <span class="text-sm text-slate-500">
          {{ selectedSize }}
        </span>
      </div>

      <div class="flex flex-wrap gap-3">
        <button
          v-for="size in product.sizes"
          :key="size"
          type="button"
          class="flex h-11 min-w-11 items-center justify-center rounded-full border px-4 text-sm font-medium transition-all duration-300"
          :class="
            selectedSize === size
              ? 'border-primary bg-primary text-white'
              : 'border-black/10 hover:border-primary/20'
          "
          @click="selectedSize = size"
        >
          {{ size }}
        </button>
      </div>
    </section>

    <!-- QUANTITY -->
    <section class="mt-10">
      <h3 class="mb-4 text-sm font-semibold tracking-[0.15em] uppercase">Quantity</h3>

      <div class="inline-flex items-center rounded-full border border-black/10">
        <button class="flex h-12 w-12 items-center justify-center" @click="decreaseQuantity">
          <IconMinus :size="18" />
        </button>

        <span class="min-w-12 text-center font-medium">
          {{ quantity }}
        </span>

        <button class="flex h-12 w-12 items-center justify-center" @click="increaseQuantity">
          <IconPlus :size="18" />
        </button>
      </div>
    </section>

    <!-- ACTIONS -->
    <div class="mt-10 flex flex-col gap-4 sm:flex-row">
      <button
        class="flex h-14 flex-1 items-center justify-center gap-3 rounded-full bg-primary text-white font-semibold transition-all duration-300 hover:opacity-90"
      >
        <IconShoppingBagPlus :size="20" />

        Add To Cart
      </button>

      <button
        class="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 transition-all duration-300 hover:border-primary hover:text-primary"
      >
        <IconHeart :size="20" />
      </button>
    </div>

    <!-- BENEFITS -->
    <div class="mt-12 space-y-4 rounded-3xl bg-[#f8f5f2] p-6">
      <div class="flex items-center gap-3">
        <IconTruck :size="20" class="text-primary" />

        <span class="text-sm text-slate-700"> Fast nationwide delivery </span>
      </div>

      <div class="flex items-center gap-3">
        <IconRefresh :size="20" class="text-primary" />

        <span class="text-sm text-slate-700"> Easy returns within 7 days </span>
      </div>

      <div class="flex items-center gap-3">
        <IconShieldCheck :size="20" class="text-primary" />

        <span class="text-sm text-slate-700"> Secure checkout guarantee </span>
      </div>
    </div>

    <!-- META -->
    <div class="mt-10 border-t border-black/5 pt-6 text-sm text-slate-500">
      <p>
        <span class="font-semibold text-secondary"> SKU: </span>

        {{ product.sku }}
      </p>

      <p class="mt-2">
        <span class="font-semibold text-secondary"> Brand: </span>

        {{ product.brand }}
      </p>

      <p v-if="product.tags.length" class="mt-2">
        <span class="font-semibold text-secondary"> Tags: </span>

        {{ product.tags.join(', ') }}
      </p>
    </div>
  </div>
</template>

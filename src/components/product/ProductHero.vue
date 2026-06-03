<script setup lang="ts">
import type { Product } from '@/schemas/product'
import { IconStarFilled } from '@tabler/icons-vue'

defineProps<{
  product: Product
}>()
</script>

<template>
  <section class="relative overflow-hidden bg-[#f8f5f2] pt-32 pb-20">
    <!-- BACKGROUND BLOBS -->
    <div class="absolute top-0 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

    <div class="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />

    <!-- CONTENT -->
    <div class="container-base relative z-10">
      <div class="mx-auto max-w-5xl text-center">
        <!-- BADGES -->
        <div class="mb-6 flex flex-wrap items-center justify-center gap-3">
          <span
            v-if="product.newArrival"
            class="rounded-full bg-white px-4 py-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase shadow-md"
          >
            New Arrival
          </span>

          <span
            v-if="product.bestSeller"
            class="rounded-full bg-primary px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white uppercase shadow-md"
          >
            Best Seller
          </span>

          <span
            v-if="product.featured"
            class="rounded-full bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white uppercase shadow-md"
          >
            Featured
          </span>
        </div>

        <!-- BRAND -->
        <p class="mb-4 text-sm font-semibold tracking-[0.3em] text-primary uppercase">
          {{ product.brand }}
        </p>

        <!-- PRODUCT NAME -->
        <h1 class="font-heading text-4xl font-semibold text-secondary md:text-5xl lg:text-6xl">
          {{ product.name }}
        </h1>

        <!-- SHORT DESCRIPTION -->
        <p
          v-if="product.shortDescription"
          class="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600"
        >
          {{ product.shortDescription }}
        </p>

        <!-- STATS -->
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <!-- RATING -->
          <div
            class="flex items-center gap-2 rounded-full border border-black/5 bg-white px-5 py-3 shadow-sm"
          >
            <IconStarFilled :size="18" class="text-amber-500" />

            <span class="font-semibold text-secondary">
              {{ product.rating.toFixed(1) }}
            </span>

            <span class="text-sm text-slate-500"> ({{ product.reviewCount }} reviews) </span>
          </div>

          <!-- STOCK -->
          <div class="rounded-full border border-black/5 bg-white px-5 py-3 shadow-sm">
            <span
              class="font-medium"
              :class="product.stock > 0 ? 'text-emerald-600' : 'text-red-500'"
            >
              {{ product.stock > 0 ? `${product.stock} in stock` : 'Out of stock' }}
            </span>
          </div>

          <!-- SKU -->
          <div class="rounded-full border border-black/5 bg-white px-5 py-3 shadow-sm">
            <span class="text-sm text-slate-500"> SKU: </span>

            <span class="ml-1 font-medium text-secondary">
              {{ product.sku }}
            </span>
          </div>
        </div>

        <!-- PRICE -->
        <div class="mt-10">
          <div
            class="inline-flex items-center gap-4 rounded-full border border-black/5 bg-white px-8 py-4 shadow-lg"
          >
            <span class="text-3xl font-bold text-secondary"> ₦{{ product.price }} </span>

            <span v-if="product.compareAtPrice" class="text-lg text-slate-400 line-through">
              ₦{{ product.compareAtPrice }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

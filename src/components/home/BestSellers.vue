<script setup lang="ts">
import {
  IconArrowRight,
  IconEye,
  IconHeart,
  IconShoppingCartPlus,
  IconStarFilled,
  IconFlame,
} from '@tabler/icons-vue'

const products = [
  {
    id: 1,
    name: 'Terracotta Premium Set',
    category: 'Unisex Fashion',
    price: '$110',
    rating: 4.9,
    image:
      'https://plus.unsplash.com/premium_photo-1664882424563-2c0cd50215a8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Classic Luxe Jacket',
    category: 'Street Collection',
    price: '$145',
    rating: 5.0,
    image:
      'https://images.unsplash.com/photo-1634921276069-c24ba5d6b35c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Urban Leather Bag',
    category: 'Accessories',
    price: '$82',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Minimal White Sneakers',
    category: 'Footwear',
    price: '$98',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1608229751021-ed4bd8677753?q=80&w=1200&auto=format&fit=crop',
  },
]
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
          class="group inline-flex items-center text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
        >
          Browse Best Sellers

          <IconArrowRight :size="18" class="ml-2" />
        </button>
      </div>

      <!-- PRODUCTS -->
      <div class="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="(product, index) in products"
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
              delay: index * 80,
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
            <!-- Category -->
            <p class="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              {{ product.category }}
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
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 flex justify-center">
        <button class="primary-btn">
          Shop Trending Products

          <IconArrowRight :size="18" class="ml-2" />
        </button>
      </div>
    </div>
  </section>
</template>

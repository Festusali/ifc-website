<script setup lang="ts">
import { IconArrowRight, IconHeart, IconShoppingCartPlus, IconStarFilled } from '@tabler/icons-vue'

const products = [
  {
    id: 1,
    name: 'Terracotta Luxe Set',
    category: 'Unisex Fashion',
    price: '$85',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Classic Urban Jacket',
    category: 'Street Collection',
    price: '$120',
    rating: 4.8,
    image:
      'https://plus.unsplash.com/premium_photo-1707816501228-1d814ad62d7b?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Minimal Leather Bag',
    category: 'Accessories',
    price: '$64',
    rating: 4.7,
    image: '/images/products/leather-bag.jpg',
  },
  {
    id: 4,
    name: 'Modern Sneakers',
    category: 'Footwear',
    price: '$95',
    rating: 5.0,
    image:
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1200&auto=format&fit=crop',
  },
]
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
          class="group inline-flex items-center text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
        >
          View All Products

          <IconArrowRight :size="18" class="ml-2" />
        </button>
      </div>

      <!-- Products -->
      <div class="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
              duration: 500,
              delay: index * 60,
            },
          }"
          class="group relative overflow-hidden rounded-4xl bg-[#f8f5f2] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
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
              class="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            <!-- Wishlist -->
            <button
              class="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-secondary"
            >
              <IconHeart :size="20" />
            </button>

            <!-- Quick Add -->
            <button
              class="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-10 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-secondary opacity-0 shadow-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <IconShoppingCartPlus :size="18" />

              Add&nbsp;to&nbsp;Cart
            </button>
          </div>

          <!-- CONTENT -->
          <div class="p-6">
            <!-- Category -->
            <p class="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
              {{ product.category }}
            </p>

            <!-- Name -->
            <h3 class="mt-3 font-heading text-2xl font-semibold">
              {{ product.name }}
            </h3>

            <!-- Bottom -->
            <div class="mt-5 flex items-center justify-between">
              <!-- Price -->
              <div>
                <p class="text-2xl font-bold text-secondary">
                  {{ product.price }}
                </p>
              </div>

              <!-- Rating -->
              <div class="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 shadow-sm">
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
          Explore Full Collection

          <IconArrowRight :size="18" class="ml-2" />
        </button>
      </div>
    </div>
  </section>
</template>

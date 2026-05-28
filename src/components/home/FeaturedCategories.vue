<script setup lang="ts">
import {
  IconArrowRight,
  IconShirt,
  IconShoe,
  IconShoppingBagHeart,
  IconDiamond,
} from '@tabler/icons-vue'

const categories = [
  {
    title: 'Fashion',
    description: 'Modern outfits curated for stylish everyday wear.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
    icon: IconShirt,
  },
  {
    title: 'Shoes',
    description: 'Premium footwear collections for every occasion.',
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
    icon: IconShoe,
  },
  {
    title: 'Bags',
    description: 'Elegant bags that blend style and functionality.',
    image:
      'https://images.unsplash.com/photo-1682745230951-8a5aa9a474a0?q=80&w=1200&auto=format&fit=crop',
    icon: IconShoppingBagHeart,
  },
  {
    title: 'Accessories',
    description: 'Minimal accessories that complete your look.',
    image:
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1200&auto=format&fit=crop',
    icon: IconDiamond,
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-white/90 py-24">
    <!-- Decorative Blur -->
    <div class="absolute top-0 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

    <div class="container-base relative z-10">
      <!-- Header -->
      <div class="mx-auto max-w-3xl text-center">
        <p class="mb-4 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
          Featured Categories
        </p>

        <h2 class="font-heading text-4xl leading-tight font-bold md:text-5xl">
          Curated Fashion Collections
        </h2>

        <p class="mx-auto mt-6 max-w-2xl text-lg">
          Explore premium fashion pieces, footwear, bags and accessories designed to elevate your
          everyday style.
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="(category, index) in categories"
          :key="index"
          v-motion
          :initial="{
            opacity: 0,
            y: 50,
          }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              delay: index * 60,
            },
          }"
          class="group relative overflow-hidden rounded-4xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
        >
          <!-- Image -->
          <div class="relative h-105 overflow-hidden">
            <img
              :src="category.image"
              :alt="category.title"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
            />

            <!-- Icon -->
            <div
              class="absolute top-5 left-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl"
            >
              <component :is="category.icon" :size="22" />
            </div>

            <!-- Content -->
            <div class="absolute right-0 bottom-0 left-0 p-6">
              <h3 class="font-heading text-3xl font-semibold text-white">
                {{ category.title }}
              </h3>

              <p class="mt-3 line-clamp-2 text-sm leading-relaxed text-white/75">
                {{ category.description }}
              </p>

              <!-- CTA -->
              <button
                class="mt-6 inline-flex items-center text-sm font-medium text-soft transition-all duration-300 hover:gap-3"
              >
                Explore Collection

                <IconArrowRight :size="18" class="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

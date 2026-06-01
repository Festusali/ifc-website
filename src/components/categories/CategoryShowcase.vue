<script setup lang="ts">
import { computed } from 'vue'
import { IconSparkles, IconTrendingUp, IconStar, IconPackage } from '@tabler/icons-vue'

import BreadCrumb from '@/components/layout/BreadCrumb.vue'
import type { Category } from '@/schemas/category'

interface Props {
  category: Category
}

const props = defineProps<Props>()

const heroImage = computed(() => props.category.banner || props.category.image)

const breadcrumb = computed(() => ({
  items: [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'Categories',
      to: '/categories',
    },
    {
      label: props.category.name,
    },
  ],
  linkClass: 'text-white/70 transition-colors duration-300 hover:text-primary',
  activeLinkClass: 'text-white font-medium',
}))

const categoryFlags = computed(() => {
  const badges = []

  if (props.category.featured) {
    badges.push({
      label: 'Featured Collection',
      icon: IconStar,
    })
  }

  if (props.category.popular) {
    badges.push({
      label: 'Popular Choice',
      icon: IconTrendingUp,
    })
  }

  if (props.category.newArrival) {
    badges.push({
      label: 'New Arrival',
      icon: IconSparkles,
    })
  }

  return badges
})

const accentStyle = computed(() => ({
  color: props.category.accentColor || '#D6A77A',
}))
</script>

<template>
  <section class="relative overflow-hidden pt-28 pb-24">
    <!-- BACKGROUND -->
    <div class="absolute inset-0">
      <img :src="heroImage" :alt="category.name" class="h-full w-full object-cover" />

      <!-- OVERLAY -->
      <div class="absolute inset-0 bg-black/10" />

      <!-- GRADIENT -->
      <div
        class="absolute inset-0 bg-linear-to-r from-secondary/75 via-secondary/60 to-secondary/30"
      />

      <!-- BLUR -->
      <div class="absolute inset-0 backdrop-[blur(2px)]" />
    </div>

    <!-- GLOW -->
    <div class="absolute -top-20 right-0 h-80 w-80 rounded-full bg-primary/40 blur-3xl">
      <!-- Rounded thumbnail of the category -->
      <img
        v-if="props.category.image"
        :src="props.category.image"
        :alt="category.name"
        class="h-24 w-24 rounded-full object-cover absolute -top-12 -left-12 border-4 border-white/50"
      />
    </div>

    <div class="container-base relative z-10">
      <div class="max-w-4xl">
        <!-- Breadcrumb -->
        <div class="mb-8">
          <BreadCrumb :breadcrumb="breadcrumb" />
        </div>

        <!-- CATEGORY LABEL -->
        <div
          class="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-xl"
        >
          Collection
        </div>

        <!-- TITLE -->
        <h1
          class="font-heading text-5xl leading-tight font-bold text-white md:text-6xl lg:text-7xl"
        >
          {{ category.name }}
        </h1>

        <!-- SHORT DESCRIPTION -->
        <p
          v-if="category.shortDescription"
          class="mt-6 max-w-2xl text-xl leading-relaxed text-white/85"
        >
          {{ category.shortDescription }}
        </p>

        <!-- DESCRIPTION -->
        <p
          v-if="category.description"
          class="mt-4 max-w-3xl text-base leading-relaxed text-white/70"
        >
          {{ category.description }}
        </p>

        <!-- BADGES -->
        <div v-if="categoryFlags.length" class="mt-8 flex flex-wrap gap-3">
          <div
            v-for="badge in categoryFlags"
            :key="badge.label"
            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl"
          >
            <component :is="badge.icon" :size="16" />

            <span>
              {{ badge.label }}
            </span>
          </div>
        </div>

        <!-- STATS -->
        <div class="mt-10 flex flex-wrap gap-4">
          <!-- Product Count -->
          <div
            class="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-xl"
          >
            <IconPackage :size="18" />

            <span class="font-medium">
              {{ category.productCount }}
              Products
            </span>
          </div>

          <!-- Featured -->
          <div
            v-if="category.featured"
            class="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl"
          >
            Curated Collection
          </div>

          <!-- Popular -->
          <div
            v-if="category.popular"
            class="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl"
          >
            Trending Now
          </div>

          <!-- New -->
          <div
            v-if="category.newArrival"
            class="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl"
          >
            Fresh Arrivals
          </div>
        </div>

        <!-- ACCENT -->
        <div v-if="category.accentColor" class="mt-10 flex items-center gap-3">
          <div class="h-3 w-3 rounded-full" :style="{ backgroundColor: category.accentColor }" />

          <span class="text-sm font-medium text-white/80" :style="accentStyle">
            Signature Collection
          </span>
        </div>
      </div>
    </div>

    <!-- BOTTOM FADE -->
    <div class="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-soft/60 to-transparent" />
  </section>
</template>

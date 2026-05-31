<script setup lang="ts">
import { IconSparkles } from '@tabler/icons-vue'
import BreadCrumb from '../layout/BreadCrumb.vue'

const breadcrumbItems = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Shop',
  },
]

const breadcrumb = {
  items: breadcrumbItems,
  linkClass: 'text-white-80 transition-colors duration-300 hover:text-primary',
  activeLinkClass: 'text-white font-medium',
}
</script>

<template>
  <section class="relative overflow-hidden pt-28 pb-20">
    <!-- BACKGROUND IMAGE -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1800&auto=format&fit=crop"
        alt="Shop Collection"
        class="h-full w-full object-cover"
      />

      <!-- DARK OVERLAY -->
      <div class="absolute inset-0 bg-black/60" />

      <!-- WARM GRADIENT -->
      <div
        class="absolute inset-0 bg-linear-to-r from-secondary/95 via-secondary/75 to-primary/35"
      />

      <!-- SOFT BLUR -->
      <div class="absolute inset-0 backdrop-[blur(2px)]" />
    </div>

    <!-- Decorative Glow -->
    <div class="absolute -top-20 right-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

    <div class="container-base relative z-10">
      <div class="max-w-3xl">
        <!-- Breadcrumb -->
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 20,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 600,
            },
          }"
          class="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/70"
        >
          <BreadCrumb :breadcrumb="breadcrumb" />
        </div>

        <!-- Badge -->
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 30,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 700,
              delay: 100,
            },
          }"
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl"
        >
          <IconSparkles :size="18" />

          <span> Curated Fashion Collections </span>
        </div>

        <!-- Heading -->
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 50,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 800,
              delay: 150,
            },
          }"
        >
          <h1
            class="font-heading text-5xl leading-tight font-bold text-white md:text-6xl lg:text-7xl"
          >
            Discover Your
            <span class="text-soft"> Signature Style </span>
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Explore premium fashion pieces, footwear, bags and accessories designed to elevate your
            everyday look with elegance and confidence.
          </p>
        </div>

        <!-- STATS / HIGHLIGHTS -->
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 40,
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 900,
              delay: 250,
            },
          }"
          class="mt-10 flex flex-wrap gap-4"
        >
          <!-- ITEM -->
          <div
            class="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl"
          >
            500+ Fashion Products
          </div>

          <!-- ITEM -->
          <div
            class="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl"
          >
            New Weekly Arrivals
          </div>

          <!-- ITEM -->
          <div
            class="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl"
          >
            Nationwide Delivery
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Fade -->
    <div class="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#f8f5f2] to-transparent" />
  </section>
</template>

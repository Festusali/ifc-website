<script setup lang="ts">
import {
  IconTruckDelivery,
  IconShieldCheckFilled,
  IconRefresh,
  IconHeadset,
  IconArrowRight,
} from '@tabler/icons-vue'

const features = [
  {
    title: 'Fast Nationwide Delivery',
    description:
      'Get your favorite fashion pieces delivered quickly and securely anywhere nationwide.',
    icon: IconTruckDelivery,
  },
  {
    title: 'Premium Quality Products',
    description:
      'Every collection is carefully curated to deliver elegance, durability and comfort.',
    icon: IconShieldCheckFilled,
  },
  {
    title: 'Easy Returns Policy',
    description: 'Enjoy a smooth and stress-free shopping experience with flexible return options.',
    icon: IconRefresh,
  },
  {
    title: 'Dedicated Customer Support',
    description: 'Our team is always available to assist you before and after every purchase.',
    icon: IconHeadset,
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-white py-24">
    <!-- Decorative Background -->
    <div class="absolute -top-20 left-0 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />

    <div class="container-base relative z-10">
      <!-- TOP SECTION -->
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <!-- LEFT CONTENT -->
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 60,
          }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 800,
            },
          }"
        >
          <!-- Badge -->
          <div
            class="mb-5 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            Why Choose Us
          </div>

          <!-- Heading -->
          <h2 class="font-heading text-4xl leading-tight font-bold md:text-5xl">
            Fashion Designed Around Confidence
          </h2>

          <!-- Description -->
          <p class="mt-6 max-w-2xl text-lg">
            At Immaeby Fashion Closet, every collection is curated to blend elegance, comfort and
            timeless style — giving you a shopping experience that feels as premium as the fashion
            itself.
          </p>

          <!-- CTA -->
          <div class="mt-10">
            <button class="group primary-btn">
              Explore Collections

              <IconArrowRight
                :size="18"
                class="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div
          v-motion
          :initial="{
            opacity: 0,
            scale: 0.9,
            x: 60,
          }"
          :visibleOnce="{
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
              duration: 1000,
            },
          }"
          class="relative"
        >
          <!-- Glow -->
          <div class="absolute inset-0 rounded-[3rem] bg-primary/10 blur-3xl" />

          <!-- Image -->
          <div
            class="relative overflow-hidden rounded-[3rem] shadow-[0_25px_80px_rgba(0,0,0,0.12)]"
          >
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
              alt="Fashion Collection"
              class="h-155 w-full object-cover"
            />
          </div>

          <!-- Floating Card -->
          <div class="glass-card absolute bottom-6 left-6 rounded-2xl px-6 py-5 shadow-xl">
            <p class="text-sm font-medium text-primary">Trusted Fashion Brand</p>

            <h4 class="mt-1 text-xl font-semibold">Elegant. Modern. Timeless.</h4>
          </div>
        </div>
      </div>

      <!-- FEATURES -->
      <div class="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="(feature, index) in features"
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
              duration: 700,
              delay: index * 80,
            },
          }"
          class="group rounded-4xl border border-black/5 bg-[#f8f5f2] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >
          <!-- Icon -->
          <div
            class="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg transition-transform duration-500 group-hover:scale-110"
          >
            <component :is="feature.icon" :size="30" />
          </div>

          <!-- Title -->
          <h3 class="mt-6 font-heading text-2xl font-semibold">
            {{ feature.title }}
          </h3>

          <!-- Description -->
          <p class="mt-4 leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

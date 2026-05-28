<script setup lang="ts">
import { IconArrowRight, IconDiscount2 } from '@tabler/icons-vue'
</script>

<template>
  <section id="promo-banner" class="relative overflow-hidden py-24">
    <!-- BACKGROUND IMAGE -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1800&auto=format&fit=crop"
        alt="Promo Banner"
        class="h-full w-full object-cover"
      />

      <!-- DARK OVERLAY -->
      <div class="absolute inset-0 bg-black/60" />

      <!-- WARM OVERLAY -->
      <div
        class="absolute inset-0 bg-linear-to-r from-secondary/90 via-secondary/70 to-primary/40"
      />
    </div>

    <!-- DECORATIVE BLUR -->
    <div class="absolute top-0 left-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

    <div class="container-base relative z-10">
      <div
        class="overflow-hidden rounded-[3rem] border border-white/10 bg-white/10 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-14 lg:p-20"
      >
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
            class="max-w-2xl"
          >
            <!-- Badge -->
            <div
              class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white"
            >
              <IconDiscount2 :size="18" />

              <span> Limited Time Offer </span>
            </div>

            <!-- Heading -->
            <h2
              class="font-heading text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl"
            >
              Redefine Your
              <span class="text-soft"> Fashion Statement </span>
            </h2>

            <!-- Description -->
            <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Discover exclusive fashion pieces crafted for elegance, confidence and timeless style.
              Enjoy special offers on selected collections this season.
            </p>

            <!-- CTA -->
            <div class="mt-10 flex flex-wrap items-center gap-4">
              <!-- Primary -->
              <button
                class="group inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark"
              >
                Shop The Sale

                <IconArrowRight
                  :size="18"
                  class="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <!-- Secondary -->
              <button
                class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-secondary"
              >
                Explore Collections
              </button>
            </div>
          </div>

          <!-- RIGHT CONTENT -->
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
            class="relative hidden lg:block"
          >
            <!-- Decorative Glow -->
            <div class="absolute inset-0 rounded-[3rem] bg-primary/20 blur-3xl" />

            <!-- Image -->
            <div
              class="relative overflow-hidden rounded-[3rem] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.4)]"
            >
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
                alt="Fashion Promo"
                class="h-130 w-full object-cover"
              />
            </div>

            <!-- Floating Card -->
            <div
              class="absolute -bottom-6 left-10 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 shadow-2xl backdrop-blur-xl"
            >
              <p class="text-sm font-medium text-white/70">Seasonal Offer</p>

              <h4 class="mt-1 text-xl font-semibold text-white">Up to 30% Off</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

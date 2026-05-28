<script setup lang="ts">
import { IconArrowRight, IconShoppingBag, IconTruck, IconShieldCheck } from '@tabler/icons-vue'
</script>

<template>
  <section class="relative min-h-[92vh] overflow-hidden bg-white/90">
    <!-- BACKGROUND IMAGE -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1517502166878-35c93a0072f0?q=80&w=1800&auto=format&fit=crop"
        alt="Fashion Background"
        class="h-full w-full object-cover"
      />

      <!-- DARK OVERLAY -->
      <div class="absolute inset-0 bg-black/45" />

      <!-- WARM GRADIENT -->
      <div
        class="absolute inset-0 bg-linear-to-r from-secondary/50 via-secondary/20 to-secondary/40"
      />

      <!-- SOFT BLUR -->
      <div class="absolute inset-0 backdrop-[blur(2px)]" />
    </div>

    <!-- DECORATIVE BLOBS -->
    <div class="absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

    <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#f3e7de]/10 blur-3xl" />

    <!-- CONTENT -->
    <div class="container-base relative z-10 flex min-h-[92vh] items-center py-16">
      <div class="grid w-full items-center gap-16 lg:grid-cols-2">
        <!-- LEFT CONTENT -->
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 80,
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 800,
            },
          }"
          class="max-w-2xl"
        >
          <!-- GLASS CARD -->
          <div
            class="rounded-4xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl md:p-10"
          >
            <!-- BADGE -->
            <div
              class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/50 px-4 py-2 text-sm font-medium text-white"
            >
              <IconShoppingBag :size="18" />

              <span> Modern Unisex Fashion </span>
            </div>

            <!-- HEADING -->
            <h1
              class="font-heading text-5xl leading-tight font-bold text-primary md:text-6xl lg:text-7xl"
            >
              <span class="text-white/95 fw-bold"> Wear Confidence. </span>
              <span class="text-soft"> Define Style. </span>
            </h1>

            <!-- DESCRIPTION -->
            <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
              Discover premium fashion pieces, shoes, bags and accessories curated for bold
              personalities and elegant everyday living.
            </p>

            <!-- BUTTONS -->
            <div class="mt-10 flex flex-wrap items-center gap-4">
              <!-- PRIMARY -->
              <a
                href="#"
                class="group inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark"
              >
                Shop Collection

                <IconArrowRight
                  :size="18"
                  class="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <!-- SECONDARY -->
              <a
                href="#"
                class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-secondary"
              >
                Explore New Arrivals
              </a>
            </div>

            <!-- TRUST ITEMS -->
            <div class="mt-12 flex flex-wrap gap-6">
              <!-- ITEM -->
              <div
                class="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-lg"
              >
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <IconTruck :size="20" class="text-[#f7c7a3]" />
                </div>

                <div>
                  <p class="text-sm font-semibold text-white">Fast Delivery</p>

                  <p class="text-xs text-white/60">Nationwide</p>
                </div>
              </div>

              <!-- ITEM -->
              <div
                class="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-lg"
              >
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <IconShieldCheck :size="20" class="text-[#f7c7a3]" />
                </div>

                <div>
                  <p class="text-sm font-semibold text-white">Premium Quality</p>

                  <p class="text-xs text-white/60">Curated Fashion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div
          v-motion
          :initial="{
            opacity: 0,
            x: 100,
            scale: 0.9,
          }"
          :visible="{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 800,
            },
          }"
          class="relative"
        >
          <!-- GLOW -->
          <div class="absolute inset-0 rounded-4xl bg-primary/20 blur-3xl" />

          <!-- MAIN IMAGE -->
          <div
            class="relative overflow-hidden rounded-4xl border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
          >
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
              alt="Fashion Model"
              class="h-100 md:h-180 w-full object-cover"
            />
          </div>

          <!-- FLOATING LABEL -->
          <div
            class="absolute -bottom-6 left-10 rounded-2xl border border-white/20 bg-white/20 px-6 py-4 shadow-2xl backdrop-blur-xl"
          >
            <p class="text-sm font-medium text-white/90">Featured Collection</p>

            <h4 class="mt-1 text-xl font-semibold text-white">Terracotta Edition</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- BOTTOM FADE -->
    <div class="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white to-transparent" />
  </section>
</template>

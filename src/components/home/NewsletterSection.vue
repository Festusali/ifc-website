<script setup lang="ts">
import { IconArrowRight, IconMail, IconSparkles, IconCheck } from '@tabler/icons-vue'
</script>

<template>
  <section id="newsletter" class="relative overflow-hidden bg-soft/10 py-24">
    <!-- Background Glow -->
    <div class="absolute top-0 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

    <div class="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

    <div class="container-base relative z-10">
      <div
        class="relative overflow-hidden rounded-[3rem] bg-secondary px-8 py-14 shadow-[0_25px_80px_rgba(0,0,0,0.12)] md:px-14 md:py-18 lg:px-20"
      >
        <!-- Decorative Elements -->
        <div class="absolute -top-16 -right-16 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />

        <div class="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div class="relative z-10 grid items-center gap-14 lg:grid-cols-2">
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
              class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl"
            >
              <IconSparkles :size="18" />

              <span> Join Our Community </span>
            </div>

            <!-- Heading -->
            <h2
              class="font-heading text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl"
            >
              Stay Ahead Of
              <span class="text-soft"> Fashion Trends </span>
            </h2>

            <!-- Description -->
            <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Subscribe to receive exclusive offers, early access to new collections and premium
              fashion inspiration delivered directly to your inbox.
            </p>

            <!-- Benefits -->
            <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <!-- Item -->
              <div
                class="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-xl"
              >
                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                  <IconCheck :size="16" class="text-soft" />
                </div>

                <span class="text-sm font-medium"> Exclusive Discounts </span>
              </div>

              <!-- Item -->
              <div
                class="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-xl"
              >
                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                  <IconCheck :size="16" class="text-soft" />
                </div>

                <span class="text-sm font-medium"> Early Product Access </span>
              </div>

              <!-- Item -->
              <div
                class="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-xl"
              >
                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                  <IconCheck :size="16" class="text-soft" />
                </div>

                <span class="text-sm font-medium"> Fashion Updates </span>
              </div>
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
            class="relative"
          >
            <!-- Glass Card -->
            <div
              class="rounded-[2.5rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl md:p-10"
            >
              <!-- Icon -->
              <div
                class="flex h-18 w-18 items-center justify-center rounded-3xl bg-primary text-white shadow-xl"
              >
                <IconMail :size="34" />
              </div>

              <!-- Form Heading -->
              <h3 class="mt-8 font-heading text-3xl font-semibold text-white">
                Subscribe Newsletter
              </h3>

              <p class="mt-4 leading-relaxed text-white/70">
                Join thousands of fashion lovers receiving curated style inspiration every week.
              </p>

              <!-- Form -->
              <form class="mt-8 space-y-5">
                <!-- Input -->
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    class="h-14 w-full rounded-2xl border border-white/10 bg-white/10 px-5 text-white placeholder:text-white/40 backdrop-blur-xl outline-none transition-all duration-300 focus:border-primary"
                  />
                </div>

                <!-- Button -->
                <button
                  type="submit"
                  class="group inline-flex w-full items-center justify-center rounded-2xl bg-primary px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark"
                >
                  Subscribe Now

                  <IconArrowRight
                    :size="18"
                    class="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>

              <!-- Footer Text -->
              <p class="mt-5 text-center text-sm text-white/50">
                No spam. Only premium fashion updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

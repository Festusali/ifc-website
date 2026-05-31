<script setup lang="ts">
import { IconCategory2 } from '@tabler/icons-vue'
</script>

<template>
  <section class="relative overflow-hidden pt-32 pb-24">
    <!-- BACKGROUND IMAGE -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="
        background-image: url('https://plus.unsplash.com/premium_photo-1672883552100-0630db7398f4?q=80&w=900&auto=format&fit=crop');
      "
    />

    <!-- OVERLAY -->
    <div class="absolute inset-0 scale-105 bg-cover bg-center" />

    <!-- DECORATION -->
    <div class="absolute top-0 left-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

    <div class="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

    <div class="container-base relative z-10">
      <div class="mx-auto max-w-4xl text-center">
        <!-- ICON -->
        <div
          class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/90 bg-white/90 text-primary backdrop-blur-md"
        >
          <IconCategory2 :size="30" />
        </div>

        <!-- LABEL -->
        <div>
          <p
            class="mt-6 inline-flex items-center gap-3 rounded-full border border-black/5 bg-white px-6 py-3 shadow-lg mb-4 text-sm font-semibold tracking-[0.25em] text-primary uppercase"
          >
            Discover Collections
          </p>
        </div>

        <!-- TITLE -->
        <h1 class="font-heading text-5xl font-semibold text-white md:text-6xl">
          Browse Categories
        </h1>

        <!-- DESCRIPTION -->
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
          Explore fashion collections, accessories and curated styles designed to inspire your next
          look.
        </p>

        <!-- STATS -->
        <div
          class="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white px-6 py-3 shadow-xl backdrop-blur-md"
        >
          <span class="h-2.5 w-2.5 rounded-full bg-primary" />

          <span class="text-sm font-medium text-secondary"> Explore all available categories </span>
        </div>
      </div>
    </div>
  </section>
</template>

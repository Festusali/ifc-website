<script setup lang="ts">
import { IconShoppingBag, IconCategory, IconMoodSad } from '@tabler/icons-vue'
</script>

<template>
  <section class="py-24">
    <div class="container-base">
      <div
        class="mx-auto max-w-3xl rounded-4xl border border-black/5 bg-white p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
      >
        <!-- ICON -->
        <div class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#f8f5f2]">
          <IconMoodSad :size="44" class="text-primary" />
        </div>

        <!-- TITLE -->
        <h1 class="mt-8 text-3xl font-heading font-semibold text-secondary">Product Not Found</h1>

        <!-- MESSAGE -->
        <p class="mx-auto mt-4 max-w-xl text-slate-600 leading-relaxed">
          The product you're looking for may have been removed, renamed, temporarily unavailable, or
          the link may no longer be valid.
        </p>

        <!-- ACTIONS -->
        <div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <RouterLink
            :to="{ name: 'shop' }"
            class="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 font-medium text-white transition hover:opacity-90"
          >
            <IconShoppingBag :size="18" />
            Continue Shopping
          </RouterLink>

          <RouterLink
            :to="{ name: 'categories' }"
            class="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-8 font-medium text-secondary transition hover:border-primary hover:text-primary"
          >
            <IconCategory :size="18" />
            Browse Categories
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

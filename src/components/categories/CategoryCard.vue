<script setup lang="ts">
import type { Category } from '@/schemas/category'
import { IconArrowRight } from '@tabler/icons-vue'

defineProps<{
  category: Category
}>()
</script>

<template>
  <RouterLink
    :to="{
      name: 'category-detail',
      params: {
        slug: category.slug,
      },
    }"
    class="group block"
  >
    <article
      class="relative overflow-hidden rounded-4xl bg-black shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]"
    >
      <!-- IMAGE -->
      <div class="relative aspect-4/5 overflow-hidden">
        <img
          :src="category.image"
          :alt="category.name"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <!-- OVERLAY -->
        <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        <!-- BADGES -->
        <div class="absolute top-4 left-4 flex flex-wrap gap-2">
          <span
            v-if="category.featured"
            class="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold tracking-[0.15em] text-white uppercase"
          >
            Featured
          </span>

          <span
            v-if="category.popular"
            class="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-[0.15em] text-secondary uppercase backdrop-blur-sm"
          >
            Popular
          </span>

          <span
            v-if="category.newArrival"
            class="rounded-full bg-soft/90 px-3 py-1 text-[11px] font-semibold tracking-[0.15em] text-secondary uppercase backdrop-blur-sm"
          >
            New
          </span>
        </div>

        <!-- CONTENT -->
        <div class="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <div class="translate-y-3 transition-all duration-500 group-hover:translate-y-0">
            <!-- PRODUCT COUNT -->
            <p class="mb-2 text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
              {{ category.productCount }} Products
            </p>

            <!-- TITLE -->
            <h3 class="font-heading text-2xl font-semibold text-white md:text-3xl">
              {{ category.name }}
            </h3>

            <!-- DESCRIPTION -->
            <p class="mt-2 line-clamp-2 max-w-md text-sm text-white/80">
              {{ category.shortDescription }}
            </p>

            <!-- CTA -->
            <div class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
              Explore Collection

              <IconArrowRight
                :size="18"
                class="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  </RouterLink>
</template>

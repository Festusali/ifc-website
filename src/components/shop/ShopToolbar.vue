<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { IconAdjustmentsHorizontal, IconChevronDown, IconSearch } from '@tabler/icons-vue'

defineProps<{
  totalProducts?: number
}>()

defineEmits<{
  (e: 'toggle-filters'): void
}>()

const productsStore = useProductsStore()
</script>

<template>
  <section class="relative z-20 -mt-10">
    <div class="container-base">
      <div
        class="rounded-4xl border border-black/5 bg-white/90 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-xl"
      >
        <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <!-- LEFT -->
          <div class="flex flex-1 flex-col gap-4 md:flex-row md:items-center">
            <!-- SEARCH -->
            <div class="relative w-full md:max-w-md">
              <div
                class="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400"
              >
                <IconSearch :size="20" />
              </div>

              <input
                v-model="productsStore.searchQuery"
                type="text"
                placeholder="Search products..."
                class="h-12 w-full rounded-full border border-black/5 bg-[#f8f5f2] pr-5 pl-12 text-sm outline-none transition-all duration-300 focus:border-primary/20 focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <!-- FILTER BUTTON -->
            <button
              @click="$emit('toggle-filters')"
              class="lg:hidden inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/5 bg-[#f8f5f2] px-6 text-sm font-medium text-secondary transition-all duration-300 hover:border-primary/20 hover:bg-primary/5"
            >
              <IconAdjustmentsHorizontal :size="20" />
              Filters
            </button>
          </div>

          <!-- RIGHT -->
          <div class="flex flex-col gap-4 md:flex-row md:items-center">
            <!-- PRODUCT COUNT -->
            <div class="text-sm text-slate-500">
              Showing
              <span class="font-semibold text-secondary">
                {{ totalProducts || 6 }}
              </span>
              products
            </div>

            <!-- SORT -->
            <div class="relative">
              <select
                v-model="productsStore.sortBy"
                class="h-12 appearance-none rounded-full border border-black/5 bg-[#f8f5f2] px-5 pr-12 text-sm font-medium text-secondary outline-none transition-all duration-300 focus:border-primary/20 focus:ring-4 focus:ring-primary/10 w-full"
              >
                <option value="latest">Sort by Latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popularity">Most Popular</option>
                <option value="rating">Best Rated</option>
              </select>

              <!-- ICON -->
              <div
                class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400"
              >
                <IconChevronDown :size="18" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

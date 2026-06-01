<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed, type ComputedRef } from 'vue'
import { IconX } from '@tabler/icons-vue'
import { useCatalogStore } from '@/stores/catalog'
import { useCatalogProducts } from '@/composables/useCatalogProducts'
import type { Product } from '@/schemas/product'

const props = defineProps<{
  open?: boolean
  products?: ComputedRef<Product[]>
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const catalogStore = useCatalogStore()

const { categoryFilters, availableSizes, availableColors } = useCatalogProducts(
  (props.products ?? computed(() => [])) as ComputedRef<Product[]>,
)

const sidebarRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  if (sidebarRef.value && !sidebarRef.value.contains(event.target as Node)) {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<template>
  <!-- OVERLAY -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="open" class="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden" />
  </Transition>

  <!-- SIDEBAR -->
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="-translate-x-full opacity-0"
    enter-to-class="translate-x-0 opacity-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="translate-x-0 opacity-100"
    leave-to-class="-translate-x-full opacity-0"
  >
    <aside
      v-if="open"
      ref="sidebarRef"
      class="fixed top-0 left-0 z-50 flex h-screen w-75 flex-col overflow-hidden bg-white shadow-2xl lg:sticky lg:top-20 lg:z-10 lg:max-h-[90vh] lg:translate-x-0 lg:rounded-3xl lg:border lg:border-black/5 lg:shadow-none slim-scrollbar"
    >
      <!-- HEADER -->
      <div class="flex items-center justify-between border-b border-black/5 px-6 py-5">
        <h2 class="text-lg font-semibold text-secondary">Filters</h2>

        <button
          class="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f5f2] transition hover:bg-primary hover:text-white lg:hidden"
          @click="emit('close')"
        >
          <IconX :size="20" />
        </button>
      </div>

      <!-- BODY -->
      <div class="flex-1 space-y-8 overflow-y-auto px-6 py-6">
        <!-- CATEGORIES -->
        <section class="space-y-4 overflow-y-auto">
          <h3 class="mb-4 text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
            Categories
          </h3>

          <div class="max-h-60 slim-scrollbar space-y-3 overflow-y-auto pr-2">
            <label
              v-for="category in categoryFilters"
              :key="category?.id"
              class="flex cursor-pointer items-center gap-3"
            >
              <input
                v-model="catalogStore.selectedCategories"
                :value="category?.id"
                type="checkbox"
                class="h-4 w-4 rounded border-black/10 text-primary focus:ring-primary"
              />

              <span class="text-sm text-secondary">{{ category?.name }}</span>
            </label>
          </div>
        </section>

        <!-- SIZES -->
        <section>
          <h3 class="mb-4 text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
            Sizes
          </h3>

          <div class="max-h-60 slim-scrollbar overflow-y-auto flex flex-wrap gap-3">
            <button
              v-for="size in availableSizes"
              :key="size"
              type="button"
              class="flex h-10 min-w-10 items-center justify-center rounded-full border px-4 text-sm font-medium transition-all duration-300"
              :class="
                catalogStore.selectedSizes.includes(size)
                  ? 'border-primary bg-primary text-white'
                  : 'border-black/10 bg-white text-secondary hover:border-primary/20'
              "
              @click="catalogStore.toggleSize(size)"
            >
              {{ size }}
            </button>
          </div>
        </section>

        <!-- COLORS -->
        <section>
          <h3 class="mb-4 text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
            Colors
          </h3>

          <div class="max-h-60 slim-scrollbar overflow-y-auto flex flex-wrap gap-3">
            <button
              v-for="color in availableColors"
              :key="color"
              type="button"
              class="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300"
              :class="
                catalogStore.selectedColors.includes(color)
                  ? 'border-primary bg-primary text-white'
                  : 'border-black/10 bg-white text-secondary hover:border-primary/20'
              "
              @click="catalogStore.toggleColor(color)"
            >
              {{ color }}
            </button>
          </div>
        </section>

        <!-- STOCK -->
        <section>
          <label class="flex cursor-pointer items-center gap-3">
            <input
              v-model="catalogStore.inStockOnly"
              type="checkbox"
              class="h-4 w-4 rounded border-black/10 text-primary focus:ring-primary"
            />

            <span class="text-sm font-medium text-secondary"> In Stock Only </span>
          </label>
        </section>
      </div>

      <!-- FOOTER -->
      <div class="border-t border-black/5 p-6">
        <button
          class="flex h-12 w-full items-center justify-center rounded-full bg-secondary text-sm font-semibold text-white transition-all duration-300 hover:bg-primary"
          @click="catalogStore.clearFilters()"
        >
          Clear Filters
        </button>
      </div>
    </aside>
  </Transition>
</template>

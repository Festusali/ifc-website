<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useCategoriesStore } from '@/stores/categories'
import CategoryCard from './CategoryCard.vue'

const categoriesStore = useCategoriesStore()

const categories = computed(() => categoriesStore.filteredCategories)
const isLoading = computed(() => categoriesStore.loading)
const hasCategories = computed(() => categories.value.length > 0)

onMounted(() => {
  // In case you later swap to API, keep this pattern ready
  if (!categoriesStore.categories.length) {
    categoriesStore.fetchCategories?.()
  }
})
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <!-- Loading State -->
    <div v-if="isLoading" class="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div v-for="n in 6" :key="n" class="h-65 bg-gray-200 animate-pulse rounded-xl" />
    </div>

    <!-- Empty State -->
    <div v-else-if="!hasCategories" class="text-center py-20 text-gray-500">
      No categories available.
    </div>

    <!-- Category Grid -->
    <div v-else class="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
    </div>

    <!-- CATEGORY COUNT -->
    <div class="text-center mt-12">
      <div class="text-sm text-slate-500">
        Showing
        <span class="font-semibold text-secondary">
          {{ categoriesStore.filteredCategories.length }}
        </span>
        of
        <span class="font-semibold text-secondary">
          {{ categoriesStore.categories.length }}
        </span>
        categories
      </div>
    </div>
  </section>
</template>

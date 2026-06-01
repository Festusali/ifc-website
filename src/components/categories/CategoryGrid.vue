<script setup lang="ts">
import { computed } from 'vue'
import CategoryCard from './CategoryCard.vue'
import CatalogCount from '../layout/CatalogCount.vue'
import type { Category } from '@/schemas/category'

interface Props {
  categories: Category[]
  totalCount?: number
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  totalCount: 0,
  loading: false,
})

const hasCategories = computed(() => props.categories.length > 0)
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <!-- Loading -->
    <div v-if="loading" class="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div v-for="n in 6" :key="n" class="h-65 bg-gray-200 animate-pulse rounded-xl" />
    </div>

    <!-- Empty -->
    <div v-else-if="!hasCategories" class="text-center py-20 text-gray-500">
      No categories available.
    </div>

    <!-- Grid -->
    <div v-else class="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
    </div>

    <!-- Count -->
    <div class="text-center mt-12">
      <CatalogCount :visible="categories.length" :total="totalCount" label="categories" />
    </div>
  </section>
</template>

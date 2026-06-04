<script setup lang="ts">
import { onMounted } from 'vue'
import { useCategoriesStore } from './stores/categories'
import { useProductsStore } from './stores/products'

const productsStore = useProductsStore()
const categoriesStore = useCategoriesStore()

onMounted(() => {
  if (!productsStore.products.length) {
    productsStore.fetchProducts?.()
  }
  if (!categoriesStore.categories.length) {
    categoriesStore.fetchCategories?.()
  }
})
</script>

<template>
  <router-view />
</template>

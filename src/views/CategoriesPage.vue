<script setup lang="ts">
import CategoryGrid from '@/components/categories/CategoryGrid.vue'
import NavBar from '@/components/layout/NavBar.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Categories',
  description:
    'Explore our diverse range of fashion categories at Immaeby Fashion Closet. From trendy clothing to stylish accessories, find your perfect look.',
  keywords: [
    'categories',
    'fashion',
    'clothing',
    'accessories',
    'trendy',
    'immaeby',
    'fashion',
    'closet',
  ],
})
</script>

<template>
  <!-- NavBar -->
  <NavBar />

  <!-- Main Content -->
  <main>
    <CategoryGrid class="mt-16" />
  </main>
</template>

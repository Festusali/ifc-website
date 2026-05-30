<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import ShopHero from '@/components/shop/ShopHero.vue'
import { useSeo } from '@/composables/useSeo'
import ShopLayout from '@/components/shop/ShopLayout.vue'

useSeo({
  title: 'Shop',
  description:
    'Discover our stylish unisex fashion collection at Immaeby. Shop trendy clothing and accessories for every closet.',
  keywords: ['shop', 'fashion', 'unisex', 'clothing', 'accessories', 'trendy', 'immaeby'],
})

/* TODO

ShopPage.vue
│
├── NavBar
├── ShopHero
├── ShopToolbar
│   ├── Search
│   ├── Sort
│   ├── Filter Toggle
│   └── Product Count
├── ShopLayout
│   ├── SidebarFilters
│   └── ProductGrid
├── Pagination / Load More
├── NewsletterSection
└── Footer

*/
</script>

<template>
  <!-- Navbar -->
  <NavBar />

  <!-- Main content -->
  <main>
    <!-- Hero -->
    <ShopHero />

    <!-- Toolbar -->
    <ShopLayout />
  </main>
</template>

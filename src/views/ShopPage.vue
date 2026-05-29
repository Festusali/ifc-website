<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import ShopHero from '@/components/shop/ShopHero.vue'

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
  </main>
</template>

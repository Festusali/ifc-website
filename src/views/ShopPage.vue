<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import ShopHero from '@/components/shop/ShopHero.vue'
import ShopToolbar from '@/components/shop/ShopToolbar.vue'
import ProductGrid from '@/components/shop/ProductGrid.vue'
import { useSeo } from '@/composables/useSeo'
import { useProductsStore } from '@/stores/products'

useSeo({
  title: 'Shop',
  description:
    'Discover our stylish unisex fashion collection at Immaeby. Shop trendy clothing and accessories for every closet.',
  keywords: ['shop', 'fashion', 'unisex', 'clothing', 'accessories', 'trendy', 'immaeby'],
})

const productStore = useProductsStore()

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
    <ShopToolbar :total-products="productStore.products.length" />

    <!-- Product Grid -->
    <ProductGrid class="pt-6" />
  </main>
</template>

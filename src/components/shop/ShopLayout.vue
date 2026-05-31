<script setup lang="ts">
import ShopToolbar from '@/components/shop/ShopToolbar.vue'
import SidebarFilters from '@/components/shop/SidebarFilters.vue'
import ProductGrid from '@/components/shop/ProductGrid.vue'
import { useProductsStore } from '@/stores/products'

const productsStore = useProductsStore()

/*
TODO: Move architecture into

CatalogLayout.vue
├── ShopToolbar.vue
├── SidebarFilters.vue
├── ProductGrid.vue
└── LoadMore.vue
*/
</script>

<template>
  <section class="container mx-auto py-10">
    <ShopToolbar
      :total-products="productsStore.filteredProducts.length"
      @toggle-filters="productsStore.toggleFilters()"
    />

    <div class="mt-8 flex gap-8">
      <!-- DESKTOP -->
      <div class="hidden lg:block w-75 shrink-0">
        <SidebarFilters open />
      </div>

      <!-- MOBILE -->
      <SidebarFilters
        :open="productsStore.isFiltersOpen"
        @close="productsStore.isFiltersOpen = false"
      />

      <!-- PRODUCTS -->
      <div class="min-w-0 flex-1">
        <ProductGrid class="pt-6" />
      </div>
    </div>
  </section>
</template>

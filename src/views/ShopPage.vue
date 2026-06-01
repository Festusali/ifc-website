<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import ShopHero from '@/components/shop/ShopHero.vue'
import { useSeo } from '@/composables/useSeo'
import NewsletterSection from '@/components/home/NewsletterSection.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import BreadCrumb from '@/components/layout/BreadCrumb.vue'
import type { Breadcrumb } from '@/types/breadcrumb'
import CatalogLayout from '@/components/layout/CatalogLayout.vue'
import { useProductsStore } from '@/stores/products'
import { onMounted, computed } from 'vue'
import ShopToolbar from '@/components/layout/ShopToolbar.vue'
import SidebarFilters from '@/components/layout/SidebarFilters.vue'
import ProductGrid from '@/components/layout/ProductGrid.vue'
import CatalogCount from '@/components/layout/CatalogCount.vue'
import LoadMore from '@/components/layout/LoadMore.vue'
import { useCatalogProducts } from '@/composables/useCatalogProducts'
import { useCatalogStore } from '@/stores/catalog'

useSeo({
  title: 'Shop',
  description:
    'Discover our stylish unisex fashion collection at Immaeby. Shop trendy clothing and accessories for every closet.',
  keywords: ['shop', 'fashion', 'unisex', 'clothing', 'accessories', 'trendy', 'immaeby'],
})

const productsStore = useProductsStore()
const catalogStore = useCatalogStore()

const { visibleProducts, hasMoreProducts } = useCatalogProducts(
  computed(() => productsStore.products),
)

const breadcrumbItems = [
  {
    label: 'Home',
    to: { name: 'home' },
  },
  {
    label: 'Shop',
  },
]

const breadcrumb: Breadcrumb = {
  items: breadcrumbItems,
  align: 'center',
  linkClass: 'text-primary transition-colors duration-300 hover:text-primary',
  activeLinkClass: 'text-secondary font-medium',
}

onMounted(() => {
  if (!productsStore.products.length) {
    productsStore.fetchProducts?.()
  }
})
</script>

<template>
  <!-- Navbar -->
  <NavBar />

  <!-- Main content -->
  <main>
    <!-- Hero -->
    <ShopHero />

    <CatalogLayout>
      <template #toolbar>
        <ShopToolbar
          :products="computed(() => productsStore.products)"
          @toggle-filters="catalogStore.toggleFilters"
        />
      </template>

      <template #filters>
        <!-- DESKTOP -->
        <div class="hidden lg:block w-75 shrink-0">
          <SidebarFilters :products="computed(() => productsStore.products)" open />
        </div>

        <!-- MOBILE -->
        <SidebarFilters
          :products="computed(() => productsStore.products)"
          :open="catalogStore.isFiltersOpen"
          @close="catalogStore.closeFilters"
        />
      </template>

      <ProductGrid :products="visibleProducts" :loading="productsStore.loading" />

      <!-- Catalog count -->
      <template #count>
        <CatalogCount :visible="visibleProducts.length" :total="productsStore.totalProducts" />
      </template>

      <!-- Load more -->
      <template #pagination>
        <LoadMore
          :loading="productsStore.loading"
          :hasMore="hasMoreProducts"
          @load-more="catalogStore.loadMoreProducts"
        />
      </template>
    </CatalogLayout>

    <!-- Newsletter -->
    <NewsletterSection class="pb-12" />

    <BreadCrumb :breadcrumb="breadcrumb" class="bg-white/10 py-12" />
  </main>

  <!-- Footer -->
  <FooterSection />
</template>

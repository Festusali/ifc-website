<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useCategoriesStore } from '@/stores/categories'
import { useCategoriesList } from '@/composables/useCategoriesList'
import { useSeo } from '@/composables/useSeo'
import type { Breadcrumb } from '@/types/breadcrumb'

import CategoriesHero from '@/components/categories/CategoriesHero.vue'
import CategoryGrid from '@/components/categories/CategoryGrid.vue'
import NewsletterSection from '@/components/home/NewsletterSection.vue'
import BreadCrumb from '@/components/layout/BreadCrumb.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import NavBar from '@/components/layout/NavBar.vue'
import LoadMore from '@/components/layout/LoadMore.vue'

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

const breadcrumbItems = [
  {
    label: 'Home',
    to: { name: 'home' },
  },
  {
    label: 'Categories',
  },
]

const breadcrumb: Breadcrumb = {
  items: breadcrumbItems,
  align: 'center',
  linkClass: 'text-primary transition-colors duration-300 hover:text-primary',
  activeLinkClass: 'text-secondary font-medium',
}

const categoriesStore = useCategoriesStore()

const { visibleCategories, hasMoreCategories, loadMoreCategories } = useCategoriesList(
  computed(() => categoriesStore.categories),
)

onMounted(() => {
  if (!categoriesStore.categories.length) {
    categoriesStore.fetchCategories?.()
  }
})
</script>

<template>
  <!-- NavBar -->
  <NavBar />

  <!-- Main Content -->
  <main>
    <!-- Categories Hero -->
    <CategoriesHero />

    <!-- Breadcrumb top -->
    <BreadCrumb :breadcrumb="breadcrumb" class="bg-white/10 py-6" />

    <!-- Category Grid -->
    <CategoryGrid
      class="pb-0"
      :categories="visibleCategories"
      :total-count="categoriesStore.categories.length"
      :loading="categoriesStore.loading"
      :has-more="hasMoreCategories"
      @load-more="loadMoreCategories"
    />

    <!-- Pagination -->
    <div class="mt-0 pt-0 mb-12">
      <LoadMore
        :has-more="hasMoreCategories"
        :loading="categoriesStore.loading"
        label="Load More Categories"
        @load-more="loadMoreCategories"
      />
    </div>

    <!-- Newsletter -->
    <NewsletterSection />

    <!-- Breadcrumb top -->
    <BreadCrumb :breadcrumb="breadcrumb" class="bg-white/10 py-12" />
  </main>

  <!-- Footer -->
  <FooterSection />
</template>

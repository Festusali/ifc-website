<script setup lang="ts">
import CategoriesHero from '@/components/categories/CategoriesHero.vue'
import CategoryGrid from '@/components/categories/CategoryGrid.vue'
import NewsletterSection from '@/components/home/NewsletterSection.vue'
import BreadCrumb from '@/components/layout/BreadCrumb.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import NavBar from '@/components/layout/NavBar.vue'
import { useSeo } from '@/composables/useSeo'
import type { Breadcrumb } from '@/types/breadcrumb'

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
    <CategoryGrid />

    <!-- Newsletter -->
    <NewsletterSection />

    <!-- Breadcrumb top -->
    <BreadCrumb :breadcrumb="breadcrumb" class="bg-white/10 py-12" />
  </main>

  <!-- Footer -->
  <FooterSection />
</template>

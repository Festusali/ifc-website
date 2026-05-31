<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import ShopHero from '@/components/shop/ShopHero.vue'
import { useSeo } from '@/composables/useSeo'
import ShopLayout from '@/components/shop/ShopLayout.vue'
import NewsletterSection from '@/components/home/NewsletterSection.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import BreadCrumb from '@/components/layout/BreadCrumb.vue'
import type { Breadcrumb } from '@/types/breadcrumb'

useSeo({
  title: 'Shop',
  description:
    'Discover our stylish unisex fashion collection at Immaeby. Shop trendy clothing and accessories for every closet.',
  keywords: ['shop', 'fashion', 'unisex', 'clothing', 'accessories', 'trendy', 'immaeby'],
})

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

    <!-- Newsletter -->
    <NewsletterSection class="pb-12" />

    <BreadCrumb :breadcrumb="breadcrumb" class="bg-white/10 py-12" />
  </main>

  <!-- Footer -->
  <FooterSection />
</template>

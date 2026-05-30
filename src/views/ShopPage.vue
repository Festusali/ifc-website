<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import ShopHero from '@/components/shop/ShopHero.vue'
import { useSeo } from '@/composables/useSeo'
import ShopLayout from '@/components/shop/ShopLayout.vue'
import NewsletterSection from '@/components/home/NewsletterSection.vue'
import FooterSection from '@/components/layout/FooterSection.vue'

useSeo({
  title: 'Shop',
  description:
    'Discover our stylish unisex fashion collection at Immaeby. Shop trendy clothing and accessories for every closet.',
  keywords: ['shop', 'fashion', 'unisex', 'clothing', 'accessories', 'trendy', 'immaeby'],
})
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
    <NewsletterSection />
  </main>

  <!-- Footer -->
  <FooterSection />
</template>

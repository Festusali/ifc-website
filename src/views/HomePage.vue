<script setup lang="ts">
import FeaturedCategories from '@/components/home/FeaturedCategories.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import NewArrivals from '@/components/home/NewArrivals.vue'
import PromoBanner from '@/components/home/PromoBanner.vue'
import NavBar from '@/components/layout/NavBar.vue'

/*
TODO: Home Page

HomePage.vue
│
├── Navbar
├── HeroSection
├── FeaturedCategories
├── NewArrivals
├── PromoBanner
├── BestSellers
├── WhyChooseUs
├── InstagramSection
├── NewsletterSection
└── Footer
*/
</script>

<template>
  <main>
    <!-- NavBar -->
    <NavBar />

    <!-- Hero Section -->
    <HeroSection class="pt-15" />

    <!-- Featured Categories -->
    <FeaturedCategories />

    <!-- New Arrivals -->
    <NewArrivals />

    <!-- Promo Banner -->
    <PromoBanner />
  </main>
</template>

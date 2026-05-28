<script setup lang="ts">
import BestSellers from '@/components/home/BestSellers.vue'
import FeaturedCategories from '@/components/home/FeaturedCategories.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import InstagramSection from '@/components/home/InstagramSection.vue'
import NewArrivals from '@/components/home/NewArrivals.vue'
import NewsletterSection from '@/components/home/NewsletterSection.vue'
import PromoBanner from '@/components/home/PromoBanner.vue'
import WhyChooseUs from '@/components/home/WhyChooseUs.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
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
  <!-- NavBar -->
  <NavBar />

  <!-- Main content -->
  <main>
    <!-- Hero Section -->
    <HeroSection class="pt-15" />

    <!-- Featured Categories -->
    <FeaturedCategories />

    <!-- New Arrivals -->
    <NewArrivals />

    <!-- Promo Banner -->
    <PromoBanner />

    <!-- Best Sellers -->
    <BestSellers />

    <!-- Why Choose Us -->
    <WhyChooseUs />

    <!-- Instagram Collection -->
    <InstagramSection />

    <!-- Subscribe To Newsletter -->
    <NewsletterSection />
  </main>

  <!-- Footer -->
  <FooterSection />
</template>

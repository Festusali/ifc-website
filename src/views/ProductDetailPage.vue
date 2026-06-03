<script setup lang="ts">
/*
TODO: Expected page structure:

ProductDetailPage
│
├── NavBar
├── ProductHero
│
├── BreadCrumb
│
├── ProductDetailSection
│   ├── ProductGallery
│   ├── ProductInfo
│   │   ├── Brand
│   │   ├── Name
│   │   ├── Rating
│   │   ├── Price
│   │   ├── Compare Price
│   │   ├── Description
│   │   ├── Colors
│   │   ├── Sizes
│   │   ├── Quantity
│   │   ├── Add To Cart
│   │   ├── Wishlist
│   │   └── Meta
│
├── ProductTabs
│   ├── Description
│   ├── Specifications
│   └── Shipping
│
├── RelatedProducts
│
├── Newsletter
└── Footer
*/

import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import { useSeo } from '@/composables/useSeo'
import { useCategoriesStore } from '@/stores/categories'
import { useCatalogProducts } from '@/composables/useCatalogProducts'
import NavBar from '@/components/layout/NavBar.vue'
import BreadCrumb from '@/components/layout/BreadCrumb.vue'
import type { Breadcrumb } from '@/types/breadcrumb'
import ProductGallery from '@/components/product/ProductGallery.vue'
import ProductTabs from '@/components/product/ProductTabs.vue'
import ProductGrid from '@/components/layout/ProductGrid.vue'
import SectionHeading from '@/components/product/SectionHeading.vue'
import NewsletterSection from '@/components/home/NewsletterSection.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import ProductHero from '@/components/product/ProductHero.vue'
import ProductInfo from '@/components/product/ProductInfo.vue'

// Initialize stores and route
const route = useRoute()
const productsStore = useProductsStore()
const categoriesStore = useCategoriesStore()

// Get the current product based on the route slug
const product = computed(() => {
  const slug = route.params.slug as string

  return productsStore.getProductBySlug(slug)
})

// Get related products based on shared categories
const relatedProducts = computed(() => {
  if (!product.value) {
    return []
  }

  return productsStore.products
    .filter(
      (item) =>
        item.id !== product.value?.id &&
        item.categoryIds.some((id) => product.value!.categoryIds.includes(id)),
    )
    .slice(0, 8)
})

const { buildCategoryTrail } = useCatalogProducts(relatedProducts)

// Configure SEO metadata based on the product details
useSeo(
  computed(() => ({
    title: product.value?.seo?.title ?? product.value?.name ?? 'Product',

    description:
      product.value?.seo?.description ??
      product.value?.shortDescription ??
      product.value?.description ??
      'Immaeby Fashion Closet - Your Ultimate Destination for Trendy Fashion',

    keywords:
      product.value?.seo?.keywords ??
      ([
        product.value?.name,
        product.value?.brand,
        ...(product.value?.tags ?? ['Product', 'Fashion', 'Clothing']),
      ].filter(Boolean) as string[]),
  })),
)

// Get the primary category for the product (used for breadcrumb and other contextual information)
const primaryCategory = computed(() => {
  if (!product.value) {
    return null
  }

  return categoriesStore.categories.find(
    (category) => category.id === product.value?.categoryIds[0],
  )
})

// Build the category trail for breadcrumb navigation
const categoryTrail = computed(() =>
  primaryCategory.value ? buildCategoryTrail(primaryCategory.value) : [],
)

// Build breadcrumb items based on the category trail and product details
const breadcrumb = computed(() => {
  if (!product.value) {
    return {
      items: [],
    }
  }

  return {
    items: [
      {
        label: 'Home',
        to: { name: 'home' },
      },
      {
        label: 'Categories',
        to: { name: 'categories' },
      },

      ...categoryTrail.value.map((item) => ({
        label: item.name,
        to: {
          name: 'category-detail',
          params: {
            slug: item.slug,
          },
        },
      })),

      {
        label: product.value.name,
      },
    ],
    align: 'center',
    linkClass: 'text-primary transition-colors duration-300 hover:text-primary',
    activeLinkClass: 'text-secondary font-medium',
  } as Breadcrumb
})

onMounted(() => {
  if (!product.value) {
    productsStore.fetchProducts()
  }

  if (!categoriesStore.categories.length) {
    categoriesStore.fetchCategories()
  }
})
</script>

<template>
  <NavBar />

  <main v-if="product">
    <ProductHero :product="product" />

    <BreadCrumb :breadcrumb="breadcrumb" class="py-6" />

    <section class="container-base py-16">
      <div class="grid gap-12 lg:grid-cols-2">
        <ProductGallery :product="product" />

        <ProductInfo :product="product" />
      </div>
    </section>

    <ProductTabs :product="product" />

    <section class="py-20">
      <div class="container-base">
        <SectionHeading title="You May Also Like" />

        <ProductGrid :products="relatedProducts" />
      </div>
    </section>

    <NewsletterSection />
  </main>

  <FooterSection />
</template>

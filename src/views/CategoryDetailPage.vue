<script setup lang="ts">
import CategoryShowcase from '@/components/categories/CategoryShowcase.vue'
import NewsletterSection from '@/components/home/NewsletterSection.vue'
import BreadCrumb from '@/components/layout/BreadCrumb.vue'
import CatalogCount from '@/components/layout/CatalogCount.vue'
import CatalogLayout from '@/components/layout/CatalogLayout.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import LoadMore from '@/components/layout/LoadMore.vue'
import NavBar from '@/components/layout/NavBar.vue'
import ProductGrid from '@/components/layout/ProductGrid.vue'
import ShopToolbar from '@/components/layout/ShopToolbar.vue'
import SidebarFilters from '@/components/layout/SidebarFilters.vue'
import { useCatalogProducts } from '@/composables/useCatalogProducts'
import { useSeo } from '@/composables/useSeo'
import { useCatalogStore } from '@/stores/catalog'
import { useCategoriesStore } from '@/stores/categories'
import { useProductsStore } from '@/stores/products'
import type { Breadcrumb } from '@/types/breadcrumb'
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

/*
TODO

NavBar
Hero
Breadcrumb
CatalogLayout
Newsletter
Footer
*/

const route = useRoute()
const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()
const catalogStore = useCatalogStore()

const category = computed(() => {
  const slug = route.params.slug as string

  return categoriesStore.getCategoryBySlug(slug)
})

const categoryProducts = computed(() => {
  if (!category.value?.id) {
    return []
  }

  return productsStore.products.filter((product) =>
    product.categoryIds.includes(category.value!.id!),
  )
})

const categoryProductsRef = computed(() => categoryProducts)

const { visibleProducts, hasMoreProducts } = useCatalogProducts(categoryProducts)

const breadcrumb = computed(
  () =>
    ({
      items: [
        {
          label: 'Home',
          to: { name: 'home' },
        },
        {
          label: 'Categories',
          to: { name: 'categories' },
        },
        {
          label: category.value?.name ?? 'Category',
        },
      ],
      align: 'center',
      linkClass: 'text-primary transition-colors duration-300 hover:text-primary',
      activeLinkClass: 'text-secondary font-medium',
    }) as Breadcrumb,
)

watch(
  category,
  (currentCategory) => {
    if (!currentCategory) {
      return
    }

    useSeo({
      title: currentCategory.seo?.title ?? currentCategory.name,
      description: currentCategory.seo?.description ?? currentCategory.description,
      keywords: currentCategory.seo?.keywords ?? [currentCategory.name],
    })
  },
  {
    immediate: true,
  },
)

onMounted(async () => {
  if (!categoriesStore.categories.length) {
    await categoriesStore.fetchCategories()
  }

  if (!productsStore.products.length) {
    await productsStore.fetchProducts()
  }
})

const categoryNotFound = computed(() => !categoriesStore.loading && !category.value)
</script>

<template>
  <NavBar />

  <main v-if="category">
    <CategoryShowcase :category="category" />

    <BreadCrumb :breadcrumb="breadcrumb" class="py-6" />

    <CatalogLayout>
      <template #toolbar>
        <ShopToolbar :products="categoryProductsRef" @toggle-filters="catalogStore.toggleFilters" />
      </template>

      <template #filters>
        <div class="hidden lg:block w-75 shrink-0">
          <SidebarFilters :products="computed(() => visibleProducts)" open />
        </div>

        <SidebarFilters
          :products="computed(() => visibleProducts)"
          :open="catalogStore.isFiltersOpen"
          @close="catalogStore.closeFilters"
        />
      </template>

      <ProductGrid :products="visibleProducts" :loading="productsStore.loading" />

      <template #count>
        <CatalogCount :visible="visibleProducts.length" :total="categoryProducts.length" />
      </template>

      <template #pagination>
        <LoadMore
          :has-more="hasMoreProducts"
          :loading="productsStore.loading"
          @load-more="catalogStore.loadMoreProducts"
        />
      </template>
    </CatalogLayout>

    <NewsletterSection />

    <BreadCrumb :breadcrumb="breadcrumb" class="py-12" />
  </main>

  <main v-else-if="categoryNotFound">
    <section class="container-base py-24 text-center">
      <h1 class="text-3xl font-semibold">Category Not Found</h1>

      <p class="mt-4 text-slate-500">The category you requested does not exist.</p>
    </section>
  </main>

  <FooterSection />
</template>

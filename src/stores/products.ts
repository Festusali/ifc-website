import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { productsSchema } from '@/schemas/product'
import { products as dummyProducts } from '@/data/shop'

import type { Product } from '@/types/product'

export const useProductsStore = defineStore('products', () => {
  // State
  const products = ref<Product[]>([])
  const loading = ref(false)

  // Computed properties for filtering products
  const featuredProducts = computed(() => products.value.filter((product) => product.featured))
  const bestSellerProducts = computed(() => products.value.filter((product) => product.bestSeller))
  const newArrivalProducts = computed(() => products.value.filter((product) => product.newArrival))
  const inStockProducts = computed(() => products.value.filter((product) => product.inStock))
  const categories = computed(() => {
    return [...new Set(products.value.map((p) => p.category))]
  })
  const availableSizes = computed(() => {
    return [...new Set(products.value.flatMap((p) => p.sizes))]
  })
  const availableColors = computed(() => {
    return [...new Set(products.value.flatMap((p) => p.colors))]
  })
  const visibleProducts = computed(() => {
    return filteredProducts.value.slice(0, productsPerPage.value)
  })
  const hasMoreProducts = computed(() => {
    return visibleProducts.value.length < filteredProducts.value.length
  })

  // Query and filter states
  const searchQuery = ref('')
  const sortBy = ref('latest')
  const selectedCategories = ref<string[]>([])
  const selectedSizes = ref<string[]>([])
  const selectedColors = ref<string[]>([])
  const isFiltersOpen = ref(false)
  const inStockOnly = ref(false)
  const defaultPerPage = 10
  const productsPerPage = ref(defaultPerPage)

  // State watcher
  watch(
    [searchQuery, sortBy, selectedCategories, selectedSizes, selectedColors, inStockOnly],
    () => {
      resetPagination()
    },
    { deep: true },
  )

  // Helper function to get product by slug
  const getProductBySlug = (slug: string) => {
    return products.value.find((product) => product.slug === slug)
  }

  const filteredProducts = computed(() => {
    let filtered = [...products.value]

    // SEARCH
    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase()

      filtered = filtered.filter((product) =>
        [product.name, product.category, product.description]
          .join(' ')
          .toLowerCase()
          .includes(query),
      )
    }

    // IN STOCK FILTER
    if (inStockOnly.value) {
      filtered = filtered.filter((product) => product.inStock)
    }

    // CATEGORY FILTER
    if (selectedCategories.value.length) {
      filtered = filtered.filter((product) => selectedCategories.value.includes(product.category))
    }

    // SIZE FILTER
    if (selectedSizes.value.length) {
      filtered = filtered.filter((product) =>
        product.sizes.some((size) => selectedSizes.value.includes(size)),
      )
    }

    // COLOR FILTER
    if (selectedColors.value.length) {
      filtered = filtered.filter((product) =>
        product.colors.some((color) => selectedColors.value.includes(color)),
      )
    }

    // SORTING
    switch (sortBy.value) {
      case 'price-low':
        filtered.sort((a, b) => Number(a.price) - Number(b.price))
        break

      case 'price-high':
        filtered.sort((a, b) => Number(b.price) - Number(a.price))
        break

      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break

      case 'latest':
        filtered.sort((a, b) => b.created.getTime() - a.created.getTime())
        break

      case 'popularity':
        filtered.sort((a, b) => {
          const aPopularity = (a.rating || 0) * (a.inStock ? 1 : 0.5) * (a.bestSeller ? 1.5 : 1)
          const bPopularity = (b.rating || 0) * (b.inStock ? 1 : 0.5) * (b.bestSeller ? 1.5 : 1)
          return bPopularity - aPopularity
        })
        break

      default:
        break
    }

    return filtered
  })

  // Actions
  const fetchProducts = async () => {
    try {
      loading.value = true

      const validatedProducts = productsSchema.parse(dummyProducts)
      products.value = validatedProducts
    } catch (error) {
      console.error('Product validation failed:', error)
    } finally {
      loading.value = false
    }
  }

  const clearFilters = () => {
    searchQuery.value = ''
    sortBy.value = 'latest'
    inStockOnly.value = false

    selectedCategories.value = []
    selectedSizes.value = []
    selectedColors.value = []
  }

  const toggleFilters = () => {
    isFiltersOpen.value = !isFiltersOpen.value
  }

  const toggleCategory = (category: string) => {
    selectedCategories.value = selectedCategories.value.includes(category)
      ? selectedCategories.value.filter((c) => c !== category)
      : [...selectedCategories.value, category]
  }

  const toggleSize = (size: string) => {
    selectedSizes.value = selectedSizes.value.includes(size)
      ? selectedSizes.value.filter((s) => s !== size)
      : [...selectedSizes.value, size]
  }

  const toggleColor = (color: string) => {
    selectedColors.value = selectedColors.value.includes(color)
      ? selectedColors.value.filter((c) => c !== color)
      : [...selectedColors.value, color]
  }

  const loadMoreProducts = () => {
    productsPerPage.value += defaultPerPage
  }

  const resetPagination = () => {
    productsPerPage.value = defaultPerPage
  }

  return {
    products,
    loading,
    featuredProducts,
    bestSellerProducts,
    newArrivalProducts,
    inStockProducts,
    fetchProducts,
    getProductBySlug,
    searchQuery,
    sortBy,
    selectedCategories,
    selectedSizes,
    selectedColors,
    filteredProducts,
    categories,
    availableSizes,
    availableColors,
    clearFilters,
    isFiltersOpen,
    toggleFilters,
    toggleCategory,
    toggleSize,
    toggleColor,
    inStockOnly,
    productsPerPage,
    visibleProducts,
    hasMoreProducts,
    loadMoreProducts,
    resetPagination,
  }
})

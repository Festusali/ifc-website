import { productsSchema } from '@/schemas/product'
import { products as dummyProducts } from '@/data/shop'
import type { Product } from '@/schemas/product'
import { defineStore } from 'pinia'
import type { Category } from '@/schemas/category'
import { useCategoriesStore } from './categories'
type ProductSort = 'latest' | 'price-low' | 'price-high' | 'rating' | 'popularity'

const DEFAULT_PER_PAGE = 10

// Check if categories are already loaded, if not, fetch them
const categoriesStore = useCategoriesStore()
if (!categoriesStore.categories.length) {
  categoriesStore.fetchCategories?.()
}

export const useProductsStore = defineStore('products', {
  state: () => ({
    // Data
    products: [] as Product[],
    loading: false,

    // Search & Filters
    searchQuery: '',
    sortBy: 'latest' as ProductSort,

    selectedCategories: [] as string[],
    selectedSizes: [] as string[],
    selectedColors: [] as string[],

    inStockOnly: false,
    isFiltersOpen: false,

    // Pagination
    productsPerPage: DEFAULT_PER_PAGE,
  }),

  getters: {
    featuredProducts: (state) => state.products.filter((product) => product.featured),

    bestSellerProducts: (state) => state.products.filter((product) => product.bestSeller),

    newArrivalProducts: (state) => state.products.filter((product) => product.newArrival),

    inStockProducts: (state) => state.products.filter((product) => product.stock > 0),

    categoryFilters(): Category[] {
      const categoriesStore = useCategoriesStore()

      const ids = [...new Set(this.products.flatMap((p) => p.categoryIds))]

      return ids
        .map((id) => categoriesStore.getCategoryById(id))
        .filter(Boolean)
        .sort((a, b) => (a?.sortOrder || 0) - (b?.sortOrder || 0)) as Category[]
    },

    availableSizes: (state) => [...new Set(state.products.flatMap((p) => p.sizes))],

    availableColors: (state) => [...new Set(state.products.flatMap((p) => p.colors))],

    filteredProducts(state): Product[] {
      let filtered = [...state.products]

      // SEARCH
      if (state.searchQuery.trim()) {
        const query = state.searchQuery.toLowerCase()

        filtered = filtered.filter((product) =>
          [
            product.name,
            product.description,
            product.brand,
            ...product.tags,
            ...product.categoryIds,
          ]
            .join(' ')
            .toLowerCase()
            .includes(query),
        )
      }

      // STOCK
      if (state.inStockOnly) {
        filtered = filtered.filter((product) => product.stock > 0)
      }

      // CATEGORY
      if (state.selectedCategories.length) {
        filtered = filtered.filter((product) =>
          product.categoryIds.some((id) => state.selectedCategories.includes(id)),
        )
      }

      // SIZE
      if (state.selectedSizes.length) {
        filtered = filtered.filter((product) =>
          product.sizes.some((size) => state.selectedSizes.includes(size)),
        )
      }

      // COLOR
      if (state.selectedColors.length) {
        filtered = filtered.filter((product) =>
          product.colors.some((color) => state.selectedColors.includes(color)),
        )
      }

      // SORT
      switch (state.sortBy) {
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
            const aPopularity =
              a.rating * (a.stock > 0 ? 1 : 0.5) * a.reviewCount * (a.bestSeller ? 1.5 : 1)
            const bPopularity =
              b.rating * (b.stock > 0 ? 1 : 0.5) * b.reviewCount * (b.bestSeller ? 1.5 : 1)

            return bPopularity - aPopularity
          })
          break
      }

      return filtered
    },

    visibleProducts(): Product[] {
      return this.filteredProducts.slice(0, this.productsPerPage)
    },

    hasMoreProducts(): boolean {
      return this.visibleProducts.length < this.filteredProducts.length
    },
  },

  actions: {
    async fetchProducts() {
      try {
        this.loading = true

        const validatedProducts = productsSchema.parse(dummyProducts)
        this.products = validatedProducts
      } catch (error) {
        console.error('Product validation failed:', error)
      } finally {
        this.loading = false
      }
    },

    getProductBySlug(slug: string) {
      return this.products.find((product) => product.slug === slug)
    },

    clearFilters() {
      this.searchQuery = ''
      this.sortBy = 'latest'
      this.inStockOnly = false
      this.selectedCategories = []
      this.selectedSizes = []
      this.selectedColors = []
      this.resetPagination()
    },

    toggleFilters() {
      this.isFiltersOpen = !this.isFiltersOpen
    },

    toggleCategory(categoryId: string) {
      if (this.selectedCategories.includes(categoryId)) {
        this.selectedCategories = this.selectedCategories.filter((id) => id !== categoryId)
      } else {
        this.selectedCategories.push(categoryId)
      }

      this.resetPagination()
    },

    toggleSize(size: string) {
      if (this.selectedSizes.includes(size)) {
        this.selectedSizes = this.selectedSizes.filter((item) => item !== size)
      } else {
        this.selectedSizes.push(size)
      }

      this.resetPagination()
    },

    toggleColor(color: string) {
      if (this.selectedColors.includes(color)) {
        this.selectedColors = this.selectedColors.filter((item) => item !== color)
      } else {
        this.selectedColors.push(color)
      }

      this.resetPagination()
    },

    setSearchQuery(query: string) {
      this.searchQuery = query
      this.resetPagination()
    },

    setSort(sort: ProductSort) {
      this.sortBy = sort
      this.resetPagination()
    },

    loadMoreProducts() {
      this.productsPerPage += DEFAULT_PER_PAGE
    },

    resetPagination() {
      this.productsPerPage = DEFAULT_PER_PAGE
    },
  },
})

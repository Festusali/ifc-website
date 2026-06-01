import { defineStore } from 'pinia'

export type ProductSort = 'latest' | 'price-low' | 'price-high' | 'rating' | 'popularity'

const DEFAULT_PER_PAGE = 10

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    // Search and sort
    searchQuery: '',
    sortBy: 'latest' as ProductSort,

    // Filters
    selectedCategories: [] as string[],
    selectedSizes: [] as string[],
    selectedColors: [] as string[],
    inStockOnly: false,

    // UI
    isFiltersOpen: false,

    // Pagination
    productsPerPage: DEFAULT_PER_PAGE,
  }),

  actions: {
    // SEARCH
    setSearchQuery(query: string) {
      this.searchQuery = query
      this.resetPagination()
    },

    // SORTING
    setSort(sort: ProductSort) {
      this.sortBy = sort
      this.resetPagination()
    },

    // FILTERS
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

    clearFilters() {
      this.searchQuery = ''

      this.sortBy = 'latest'

      this.selectedCategories = []
      this.selectedSizes = []
      this.selectedColors = []

      this.inStockOnly = false

      this.resetPagination()
    },

    // SIDEBAR
    toggleFilters() {
      this.isFiltersOpen = !this.isFiltersOpen
    },

    closeFilters() {
      this.isFiltersOpen = false
    },

    openFilters() {
      this.isFiltersOpen = true
    },

    // PAGINATION
    loadMoreProducts() {
      this.productsPerPage += DEFAULT_PER_PAGE
    },

    resetPagination() {
      this.productsPerPage = DEFAULT_PER_PAGE
    },
  },
})

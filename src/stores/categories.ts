import { defineStore } from 'pinia'

import { categoriesSchema } from '@/schemas/category'
import { categories as dummyCategories } from '@/data/shop'

import type { Category } from '@/schemas/category'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [] as Category[],
    loading: false,

    searchQuery: '',
    activeOnly: true,
  }),

  getters: {
    activeCategories: (state): Category[] => state.categories.filter((category) => category.active),

    featuredCategories: (state): Category[] =>
      state.categories.filter((category) => category.featured),

    popularCategories: (state): Category[] =>
      state.categories.filter((category) => category.popular),

    newArrivalCategories: (state): Category[] =>
      state.categories.filter((category) => category.newArrival),

    rootCategories: (state): Category[] =>
      state.categories.filter((category) => category.parentId === null),

    filteredCategories(state): Category[] {
      let filtered = [...state.categories]

      if (state.activeOnly) {
        filtered = filtered.filter((category) => category.active)
      }

      if (state.searchQuery.trim()) {
        const query = state.searchQuery.toLowerCase()

        filtered = filtered.filter((category) =>
          [category.name, category.shortDescription, category.description]
            .join(' ')
            .toLowerCase()
            .includes(query),
        )
      }

      return filtered.sort((a, b) => a.sortOrder - b.sortOrder)
    },
  },

  actions: {
    async fetchCategories() {
      try {
        this.loading = true

        const validated = categoriesSchema.parse(dummyCategories)

        this.categories = validated
      } catch (error) {
        console.error('Category validation failed:', error)
      } finally {
        this.loading = false
      }
    },

    getCategoryById(id: string) {
      return this.categories.find((category) => category.id === id)
    },

    getCategoryBySlug(slug: string) {
      return this.categories.find((category) => category.slug === slug)
    },

    getChildren(parentId: string) {
      return this.categories.filter((category) => category.parentId === parentId)
    },

    getParent(categoryId: string) {
      const category = this.getCategoryById(categoryId)

      if (!category?.parentId) {
        return null
      }

      return this.getCategoryById(category.parentId)
    },

    setSearchQuery(query: string) {
      this.searchQuery = query
    },

    clearFilters() {
      this.searchQuery = ''
      this.activeOnly = true
    },
  },
})

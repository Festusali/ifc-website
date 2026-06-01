import { computed, ref, type ComputedRef } from 'vue'
import type { Category } from '@/schemas/category'

const DEFAULT_PER_PAGE = 12

export function useCategoriesList(categories: ComputedRef<Category[]>) {
  const searchQuery = ref('')
  const activeOnly = ref(true)
  const categoriesPerPage = ref(DEFAULT_PER_PAGE)

  const filteredCategories = computed(() => {
    let filtered = [...categories.value]

    if (activeOnly.value) {
      filtered = filtered.filter((c) => c.active)
    }

    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase()

      filtered = filtered.filter((category) =>
        [category.name, category.shortDescription, category.description]
          .join(' ')
          .toLowerCase()
          .includes(q),
      )
    }

    return filtered.sort((a, b) => a.sortOrder - b.sortOrder)
  })

  const visibleCategories = computed(() =>
    filteredCategories.value.slice(0, categoriesPerPage.value),
  )

  const hasMoreCategories = computed(
    () => visibleCategories.value.length < filteredCategories.value.length,
  )

  function setSearchQuery(q: string) {
    searchQuery.value = q
    resetPagination()
  }

  function toggleActiveOnly() {
    activeOnly.value = !activeOnly.value
    resetPagination()
  }

  function loadMoreCategories() {
    categoriesPerPage.value += DEFAULT_PER_PAGE
  }

  function resetPagination() {
    categoriesPerPage.value = DEFAULT_PER_PAGE
  }

  function clearFilters() {
    searchQuery.value = ''
    activeOnly.value = true
    resetPagination()
  }

  return {
    searchQuery,
    activeOnly,
    filteredCategories,
    visibleCategories,
    hasMoreCategories,
    setSearchQuery,
    toggleActiveOnly,
    loadMoreCategories,
    resetPagination,
    clearFilters,
  }
}

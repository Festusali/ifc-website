import { computed, type ComputedRef } from 'vue'

import type { Product } from '@/schemas/product'
import type { Category } from '@/schemas/category'

import { useCatalogStore } from '@/stores/catalog'
import { useCategoriesStore } from '@/stores/categories'

export function useCatalogProducts(products: ComputedRef<Product[]>) {
  const catalogStore = useCatalogStore()
  const categoriesStore = useCategoriesStore()

  const categoryFilters = computed<Category[]>(() => {
    const ids = [...new Set(products.value.flatMap((p: Product) => p.categoryIds))]

    return ids
      .map((id: string) => categoriesStore.getCategoryById(id))
      .filter(Boolean)
      .sort((a, b) => (a?.sortOrder || 0) - (b?.sortOrder || 0)) as Category[]
  })

  const availableSizes = computed<string[]>(() => [
    ...new Set(products.value.flatMap((product: Product) => product.sizes)),
  ])

  const availableColors = computed<string[]>(() => [
    ...new Set(products.value.flatMap((product: Product) => product.colors)),
  ])

  const filteredProducts = computed<Product[]>(() => {
    let filtered = [...products.value]

    // SEARCH
    if (catalogStore.searchQuery.trim()) {
      const query = catalogStore.searchQuery.toLowerCase()

      filtered = filtered.filter((product: Product) =>
        [product.name, product.description, product.brand, ...product.tags, ...product.categoryIds]
          .join(' ')
          .toLowerCase()
          .includes(query),
      )
    }

    // STOCK
    if (catalogStore.inStockOnly) {
      filtered = filtered.filter((product) => product.stock > 0)
    }

    // CATEGORY
    if (catalogStore.selectedCategories.length) {
      filtered = filtered.filter((product: Product) =>
        product.categoryIds.some((id: string) => catalogStore.selectedCategories.includes(id)),
      )
    }

    // SIZE
    if (catalogStore.selectedSizes.length) {
      filtered = filtered.filter((product: Product) =>
        product.sizes.some((size: string) => catalogStore.selectedSizes.includes(size)),
      )
    }

    // COLOR
    if (catalogStore.selectedColors.length) {
      filtered = filtered.filter((product: Product) =>
        product.colors.some((color: string) => catalogStore.selectedColors.includes(color)),
      )
    }

    // SORT
    switch (catalogStore.sortBy) {
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
  })

  const visibleProducts = computed(() =>
    filteredProducts.value.slice(0, catalogStore.productsPerPage),
  )

  const hasMoreProducts = computed(
    () => visibleProducts.value.length < filteredProducts.value.length,
  )

  return {
    categoryFilters,
    availableSizes,
    availableColors,
    filteredProducts,
    visibleProducts,
    hasMoreProducts,
  }
}

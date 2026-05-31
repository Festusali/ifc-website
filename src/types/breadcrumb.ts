import type { RouteLocationRaw } from 'vue-router'

export interface BreadcrumbItem {
  label: string
  to?: RouteLocationRaw
}

export interface Breadcrumb {
  items: BreadcrumbItem[]
  align?: 'left' | 'center' | 'right'
  linkClass?: string
  activeLinkClass?: string
  paddingClass?: string
}

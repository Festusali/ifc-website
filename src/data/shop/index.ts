import { dummyCategories } from './categories'
import { dummyProducts } from './products'

export const products = dummyProducts
export const categories = dummyCategories

export const formatPrice = (price: string) => {
  return Number(price).toLocaleString()
}

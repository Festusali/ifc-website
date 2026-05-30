import { dummyProducts } from './products'

export const products = dummyProducts
export const formatPrice = (price: string) => {
  return Number(price).toLocaleString()
}

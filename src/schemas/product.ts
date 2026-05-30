import { z } from 'zod'

export const productSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  category: z.string(),
  description: z.string(),
  currency: z.string().default('NGN'),
  currencySymbol: z.string().default('₦'),
  price: z.string(),
  rating: z.number().min(0).max(5),
  image: z.url(),
  gallery: z.array(z.url()),
  colors: z.array(z.string()),
  sizes: z.array(z.string()),
  inStock: z.boolean(),
  featured: z.boolean().optional(),
  bestSeller: z.boolean().optional(),
  newArrival: z.boolean().optional(),
  created: z.coerce.date(),
  modified: z.coerce.date(),
})

export const productsSchema = z.array(productSchema)

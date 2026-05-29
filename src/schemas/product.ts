import { z } from 'zod'

export const productSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  category: z.string(),
  description: z.string(),
  price: z.number(),
  rating: z.number().min(0).max(5),
  image: z.string().url(),
  gallery: z.array(z.string().url()),
  colors: z.array(z.string()),
  sizes: z.array(z.string()),
  inStock: z.boolean(),
  featured: z.boolean().optional(),
  bestSeller: z.boolean().optional(),
  newArrival: z.boolean().optional(),
})

export const productsSchema = z.array(productSchema)

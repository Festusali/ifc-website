import { z } from 'zod'
import { seoSchema } from './product'

export const categorySchema = z.object({
  id: z.string(),
  slug: z.string(),

  // Display
  name: z.string(),
  shortDescription: z.string(),
  description: z.string(),

  // Media
  image: z.url(),
  banner: z.url().optional(),
  icon: z.string().optional(),

  // Hierarchy
  parentId: z.string().nullable().default(null),
  level: z.number().int().min(0).default(0),
  subcategories: z.array(z.string()).default([]),

  // Merchandising
  featured: z.boolean().default(false),
  popular: z.boolean().default(false),
  newArrival: z.boolean().default(false),

  // Product statistics
  productCount: z.number().int().min(0).default(0),

  // SEO
  seo: seoSchema.optional(),

  // Sorting
  sortOrder: z.number().int().default(0),

  // Status
  active: z.boolean().default(true),

  // Timestamps
  created: z.coerce.date(),
  modified: z.coerce.date(),
})

export const categoriesSchema = z.array(categorySchema)

// EXPORT TYPES
export type Category = z.infer<typeof categorySchema>
export type Categories = z.infer<typeof categoriesSchema>
export type CategoryInput = z.input<typeof categorySchema>

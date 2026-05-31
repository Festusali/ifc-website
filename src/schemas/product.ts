import { z } from 'zod'

export const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.array(z.string()).default([]),
  canonicalUrl: z.url().optional(),
})

export const dimensionsSchema = z.object({
  length: z.number().positive(),
  width: z.number().positive(),
  height: z.number().positive(),
  unit: z.enum(['cm', 'in']).default('cm'),
})

export const weightSchema = z.object({
  value: z.number().positive(),
  unit: z.enum(['g', 'kg', 'lb']),
})

export const variantSchema = z.object({
  id: z.string(),
  sku: z.string(),
  color: z.string().optional(),
  size: z.string().optional(),
  price: z.string(),
  compareAtPrice: z.string().optional(),
  stock: z.number().int().min(0),
  image: z.url().optional(),
})

export const productSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  shortDescription: z.string().optional(),
  description: z.string(),
  brand: z.string(),
  brandSlug: z.string(),
  categoryIds: z.array(z.string()).min(1),
  sku: z.string(),
  currency: z.string().default('NGN'),
  price: z.string(),
  compareAtPrice: z.string().optional(),
  stock: z.number().int().min(0),
  thumbnail: z.url().optional(),
  image: z.url(),
  gallery: z.array(z.url()).default([]),
  colors: z.array(z.string()).default([]),
  sizes: z.array(z.string()).default([]),
  variants: z.array(variantSchema).default([]),
  rating: z.number().min(0).max(5).default(0),
  reviewCount: z.number().int().default(0),
  tags: z.array(z.string()).default([]),
  dimensions: dimensionsSchema.optional(),
  weight: weightSchema.optional(),
  featured: z.boolean().default(false),
  featuredOrder: z.number().optional(),
  bestSeller: z.boolean().default(false),
  newArrival: z.boolean().default(false),
  salesCount: z.number().int().default(0),
  status: z.enum(['draft', 'active', 'archived', 'out_of_stock']).default('active'),
  metadata: z.record(z.string(), z.string()).default({}),
  seo: seoSchema.optional(),
  created: z.coerce.date(),
  modified: z.coerce.date(),
})

export const productsSchema = z.array(productSchema)

// EXPORT TYPES
export type Product = z.infer<typeof productSchema>
export type ProductInput = z.input<typeof productSchema>
export type Products = z.infer<typeof productsSchema>
export type ProductVariant = z.infer<typeof variantSchema>
export type ProductSeo = z.infer<typeof seoSchema>
export type ProductDimensions = z.infer<typeof dimensionsSchema>
export type ProductWeight = z.infer<typeof weightSchema>

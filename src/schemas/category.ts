import { z } from 'zod'

export const CATEGORIES = ['INBOX', 'AREAS', 'PROJECTS', 'RESOURCES', 'ARCHIVES'] as const

export const CategorySchema = z.preprocess((category) => {
  if (typeof category === 'string') {
    return category.toUpperCase()
  }
  return category
}, z.enum(CATEGORIES))

export type Category = z.infer<typeof CategorySchema>

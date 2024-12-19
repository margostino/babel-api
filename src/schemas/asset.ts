import { z } from 'zod'
import { CategorySchema } from './category'

export const AssetSchema = z.object({
  content: z.string(),
  category: CategorySchema,
})

export type Asset = z.infer<typeof AssetSchema>

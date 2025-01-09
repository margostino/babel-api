import { z } from 'zod'
import { CategorySchema } from './category'

export const AssetSchema = z.object({
  content: z.string(),
  summary: z.string(),
  path: z.string(),
  category: CategorySchema,
  highlights: z.array(z.string()),
  tags: z.array(z.string()),
  keywords: z.array(z.string()),
})

export type Asset = z.infer<typeof AssetSchema>

export const CompletionAssetSchema = AssetSchema.pick({
  content: true,
  category: true,
})

export type CompletionAsset = z.infer<typeof CompletionAssetSchema>

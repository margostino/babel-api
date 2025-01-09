import { WeaviateNonGenericObject } from 'weaviate-client'
import { CompletionAsset, CompletionAssetSchema } from '../schemas/asset'

export const objectToCompletionAssets = (
  objects: WeaviateNonGenericObject[]
): CompletionAsset[] => {
  return objects.map((object) =>
    CompletionAssetSchema.parse({
      content: object.properties.content,
      category: object.properties.category,
    })
  )
}

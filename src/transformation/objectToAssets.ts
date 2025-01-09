import { WeaviateNonGenericObject } from 'weaviate-client'
import { Asset, AssetSchema } from '../schemas'

export const objectToAssets = (objects: WeaviateNonGenericObject[]): Asset[] => {
  return objects.map((object) =>
    AssetSchema.parse({
      content: object.properties.content,
      summary: object.properties.summary,
      path: object.properties.path,
      category: object.properties.category,
      highlights: object.properties.highlights,
      tags: object.properties.tags,
      keywords: object.properties.keywords,
      references: object.properties.references,
    })
  )
}

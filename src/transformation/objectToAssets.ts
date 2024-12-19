import { WeaviateNonGenericObject } from 'weaviate-client'
import { Asset, AssetSchema } from '../schemas'

export const objectToAssets = (objects: WeaviateNonGenericObject[]): Asset[] => {
  return objects.map((object) =>
    AssetSchema.parse({
      content: object.properties.content,
      category: object.properties.category,
    })
  )
}

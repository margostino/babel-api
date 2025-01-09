import weaviate from 'weaviate-client'
import { OPENAI_API_KEY } from '../constants'
import { Asset } from '../schemas'
import { objectToAssets } from '../transformation/objectToAssets'

export const fetchAssets = async (input: string): Promise<Asset[]> => {
  // TODO: config file and create client once
  const client = await weaviate.connectToCustom({
    httpHost: 'localhost',
    httpPort: 8585,
    httpSecure: false,
    headers: {
      'X-OpenAI-Api-Key': OPENAI_API_KEY,
    },
  })

  const collection = await client.collections.get('Babel')

  // TODO: config
  const { objects } = await collection.query.fetchObjects({
    limit: 100,
  })

  const assets = objectToAssets(objects)

  return assets
}

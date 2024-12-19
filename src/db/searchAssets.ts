import weaviate from 'weaviate-client'
import { OPENAI_API_KEY, VECTOR_SEARCH_RESULT_SCORE_THRESHOLD } from '../constants'
import { Asset } from '../schemas'
import { objectToAssets } from '../transformation/objectToAssets'

export const searchAssets = async (input: string): Promise<Asset[]> => {
  // TODO: config file
  const client = await weaviate.connectToCustom({
    httpHost: 'localhost',
    httpPort: 8585,
    httpSecure: false,
    headers: {
      'X-OpenAI-Api-Key': OPENAI_API_KEY,
    },
  })

  const collection = await client.collections.get('Babel')

  const { objects } = await collection.query.hybrid(input, {
    limit: 20,
    // alpha: alpha,
    returnMetadata: ['score', 'explainScore'],
    returnProperties: ['content', 'category'],
  })

  const assets = objectToAssets(
    objects.filter(
      (object) =>
        object.metadata?.score && object.metadata?.score > VECTOR_SEARCH_RESULT_SCORE_THRESHOLD
    )
  )

  return assets
}

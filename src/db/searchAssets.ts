import weaviate from 'weaviate-client'
import {
  OPENAI_API_KEY,
  VECTOR_SEARCH_ALPHA,
  VECTOR_SEARCH_LIMIT,
  VECTOR_SEARCH_RESULT_SCORE_THRESHOLD,
} from '../constants'
import { CompletionAsset } from '../schemas'
import { objectToCompletionAssets } from '../transformation'

export const searchAssets = async (input: string): Promise<CompletionAsset[]> => {
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
  const { objects } = await collection.query.hybrid(input, {
    limit: VECTOR_SEARCH_LIMIT,
    alpha: VECTOR_SEARCH_ALPHA,
    returnMetadata: ['score', 'explainScore'],
    returnProperties: ['content', 'category'],
  })

  const assets = objectToCompletionAssets(
    objects.filter(
      (object) =>
        object.metadata?.score && object.metadata?.score > VECTOR_SEARCH_RESULT_SCORE_THRESHOLD
    )
  )

  return assets
}

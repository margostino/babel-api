import { ChatCompletionMessageParam } from 'openai/resources'
import { getPrompt } from '../assistant'
import { Asset } from '../schemas'

export const getMessagesForAssistant = ({ assets, input }: { assets: Asset[]; input: string }) => {
  const systemPrompt = getPrompt()

  const memories = assets
    .map((asset) => `CATEGORY: ${asset.category}\nCONTENT: ${asset.content}\n`)
    .join('\n')

  return [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: `Query: ${input}` },
    {
      role: 'user',
      content: `Memories: ${memories}`,
    },
  ] as ChatCompletionMessageParam[]
}

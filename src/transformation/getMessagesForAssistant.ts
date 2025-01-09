import { ChatCompletionMessageParam } from 'openai/resources'
import { getPrompt } from '../assistant'
import { getChatHistory } from '../db'
import { CompletionAsset } from '../schemas'

export const getMessagesForAssistant = ({
  assets,
  input,
}: {
  assets: CompletionAsset[]
  input: string
}) => {
  const systemPrompt = getPrompt()

  const context = assets
    .map((asset) => `CATEGORY: ${asset.category}\nCONTENT: ${asset.content}\n`)
    .join('\n')

  const chatHistory = getChatHistory()

  return [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: `QUERY: ${input}` },
    {
      role: 'user',
      content: `CHAT HISTORY: ${JSON.stringify(chatHistory)}`,
    },
    {
      role: 'user',
      content: `CONTEXT: ${context}`,
    },
  ] as ChatCompletionMessageParam[]
}

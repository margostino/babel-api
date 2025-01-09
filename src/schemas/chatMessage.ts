import { z } from 'zod'

export const ChatMessageSchema = z.object({
  user: z.string(),
  assistant: z.string(),
})

export type ChatMessage = z.infer<typeof ChatMessageSchema>

import { Request, Response } from 'express'
import OpenAI from 'openai'
import { appendChatHistory, searchAssets } from '../db'
import { getMessagesForAssistant } from '../transformation'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const getCompletionController = async (req: Request, res: Response) => {
  try {
    const input = req.query.input as string

    if (!input) {
      return res.status(400).json({ error: 'Input is required' })
    }

    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')

    const assets = await searchAssets(input)

    const messagesForAssistant = getMessagesForAssistant({ input, assets })

    const stream = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: messagesForAssistant,
      stream: true,
    })

    let assistantMessage = ''

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || ''
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`)
        assistantMessage += content
      }
    }

    appendChatHistory({
      user: input,
      assistant: assistantMessage,
    })

    res.write('data: [DONE]\n\n')
    res.end()
  } catch (error) {
    console.error('Error:', error)
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal server error' })
    } else {
      res.write(`data: ${JSON.stringify({ error: 'Stream error occurred' })}\n\n`)
      res.end()
    }
  }
}

import { Request, Response } from 'express'
import OpenAI from 'openai'
import { fetchAssets } from '../db'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// GET /assets
// GET /assets?query="some query"

export const getAssetsController = async (req: Request, res: Response) => {
  try {
    const query = req.query.query as string

    if (!query) {
      // TODO: get all assets
      return res.status(400).json({ error: 'Input is required' })
    }

    const assets = await fetchAssets(query)

    res.status(200).json({ assets })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

import { Request, Response } from 'express'

export const pingController = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'pong' })
}

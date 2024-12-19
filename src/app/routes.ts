import { Request, Response, Router } from 'express'
import { completionController } from '../controllers'

const router: Router = Router()

router.get('/ping', (req: Request, res: Response) => {
  res.status(200).json({ message: 'pong' })
})

router.get('/completion', completionController)

export default router

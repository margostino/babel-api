import { Request, Response, Router } from 'express'
import { getCompletionController } from '../controllers'
import { getAssetsController } from '../controllers/getAssetsController'

const router: Router = Router()

router.get('/ping', (req: Request, res: Response) => {
  res.status(200).json({ message: 'pong' })
})

router.get('/completion', getCompletionController)

router.get('/assets', getAssetsController)

export default router

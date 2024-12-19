import cors from 'cors'
import dotenv from 'dotenv'
import express, { Application, NextFunction, Request, Response } from 'express'
import routes from './routes'

dotenv.config()

const app: Application = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:7000',
    methods: ['GET', 'POST'],
  })
)

// Routes
app.use('/', routes)

// Default error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).send({ message: 'Internal Server Error' })
})

export default app

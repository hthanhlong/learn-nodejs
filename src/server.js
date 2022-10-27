/* eslint-disable no-unused-vars */
import express from 'express'
import cors from 'cors'
import connectDB from './config/connectDb.js'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import rootRouter from './routers/index.js'
import createHttpError from 'http-errors'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

const main = async () => {
  await connectDB()
  //middleware
  app.use(cors({ origin: '*' }))
  app.use(express.json())
  app.use(helmet())
  app.use(morgan('combined'))
  app.use(compression())
  app.use(express.urlencoded({ extended: true }))

  // router
  app.use('/api', rootRouter)

  //handle - Not Found
  app.use((req, res, next) => {
    next(createHttpError(404))
  })

  // Handle error from server
  app.use((err, req, res, next) => {
    console.log('error.massage', err.message)
    const statusCode = err.status || 500
    const message = createHttpError(statusCode)
    res.status(statusCode).json({ status: statusCode, ...message })
  })

  app.listen(PORT, () => console.log('app listen on PORT ====> ', PORT))
}

main()

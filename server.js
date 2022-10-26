/* eslint-disable no-unused-vars */
import express from 'express'
import cors from 'cors'
import connectDB from './src/config/connectDb.js'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import rootRouter from './src/routers/index.js'
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
    res.status(404).json({ message: 'Not Found' })
    next()
  })

  // Handle error from server
  app.use((err, res, req, next) => {
    res.status(err.status || 500).json({
      status: err.status || 500,
      message: err.message || '',
    })
  })

  app.listen(PORT, () => console.log('app listen on PORT ====> ', PORT))
}

main()

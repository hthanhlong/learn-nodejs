import express from 'express'
import cors from 'cors'
import connectDB from './src/config/connectDb.js'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import createError from 'http-errors'
import router from './src/routers/index.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

// connect DB
connectDB()

//middleware
app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(helmet())
app.use(morgan('combined'))
// // compress responses
app.use(compression())

app.use(
  express.urlencoded({
    extended: true,
  })
)

// //router
app.use('/api', router)

// // handle - Not Found
app.use((req, res, next) => {
  next(createError(404, 'Not Found'))
})

// // middleware---handle error from server
app.use((err, req, res) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || '',
  })
})

app.listen(PORT, () => console.log('app listen on PORT ====> ', PORT))

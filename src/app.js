/* eslint-disable no-unused-vars */
const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./config/connectDb')
const dotenv = require('dotenv')
dotenv.config()
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const createError = require('http-errors')

// connect DB

connectDB()

//middleware
app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(helmet())
app.use(morgan('combined'))
// compress responses
app.use(compression())

app.use(
  express.urlencoded({
    extended: true,
  })
)

//router
app.use('/api', require('./routes/index'))

// handle - Not Found
app.use((req, res, next) => {
  next(createError(404, 'Not Found'))
})

// middleware---handle error from server
app.use((err, req, res) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || '',
  })
})

module.exports = app

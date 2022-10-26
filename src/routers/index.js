import express from 'express'
import RouterV1 from './version1/index.js'
// import RouterV2 from './version1/index.js'

const rootRouter = express.Router()

rootRouter.use('/v1', RouterV1)
// rootRouter.post('/v2', RouterV2)

export default rootRouter

import express from 'express'
import { login, refreshToken, register } from '../controllers/auth.controller'
import { getAllUser } from '../controllers/user.controller'
import { checkToken } from '../middleware/checkToken'

const rootRouter = express.Router()

rootRouter.post('/login', login)
rootRouter.post('/register', register)
rootRouter.get('/users', checkToken, getAllUser)
rootRouter.post('/token', refreshToken)

export default rootRouter

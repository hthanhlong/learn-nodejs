import express from 'express'
import authController from '../../controllers/auth.controller'
import userController from '../../controllers/user.controller'
import { authentication } from '../../middleware/authentication'
// import { authorization } from '../../middleware/authorization'

const RouterV1 = express.Router()

RouterV1.post('/login', authController.login)
RouterV1.post('/register', authController.register)
RouterV1.post('/refresh-token', authController.refreshToken)

RouterV1.get('/users', authentication, userController.getUsers)

// RouterV1.get('/users', verifyToken, getAllUser)
// RouterV1.get('/users', verifyToken, getAllUser)
// RouterV1.get('/users', verifyToken, getAllUser)
// RouterV1.get('/users', verifyToken, getAllUser)

// RouterV1.get('/users', verifyToken, getAllUser)
// RouterV1.get('/users', verifyToken, getAllUser)
// RouterV1.get('/users', verifyToken, getAllUser)
// RouterV1.get('/users', verifyToken, getAllUser)
// RouterV1.get('/users', verifyToken, getAllUser)

export default RouterV1

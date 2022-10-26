import express from 'express'
import authController from '../../controllers/auth.controller'
import userController from '../../controllers/user.controller'
import { authentication } from '../../middleware/authentication'
import { authorization } from '../../middleware/authorization'

const RouterV2 = express.Router()

RouterV2.post('/login', authController.login)
RouterV2.post('/token', authController.refreshToken)

RouterV2.get('/users', authentication, userController.getUsers)
RouterV2.post('/user/register', authentication, authorization(['admin']), userController.createUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)

// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)

// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)

// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)

// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)

// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)

// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)
// RouterV2.get('/users', verifyToken, getAllUser)

export default RouterV2

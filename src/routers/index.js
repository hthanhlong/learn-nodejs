import express from 'express'
import { loginController } from '../controllers/login.controller.js'
import { refreshTokenController } from '../controllers/refreshtoken.controller'
import { createUserController } from '../controllers/register.controller'
import { userController } from '../controllers/user.controller'
import checkToken from '../middleware/checkToken'
const router = express.Router()

router.post('/login', loginController)
router.post('/register', createUserController)
router.get('/refresh-token', checkToken, userController)
router.post('/token', refreshTokenController)

export default router

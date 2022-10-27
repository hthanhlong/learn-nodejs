import createHttpError from 'http-errors'
import { serviceLogin, serviceRefreshToken } from '../services/login.service'
import { serviceRegister } from '../services/register.service'
import loginSchema from '../validateData/loginSchema'

class AuthController {
  login = async (req, res, next) => {
    try {
      const { error, value } = await loginSchema.validate({ ...req.body })
      if (error) return next(createHttpError(400))
      const result = await serviceLogin(value)
      if (!result) return res.status(200).json({ error: true, message: 'Login failed' })
      res.status(200).json({ ...result })
    } catch (error) {
      console.log('🚀 ~ file: auth.controller.js ~ line 12 ~ AuthController ~ login= ~ error', error.message)
      next(error)
    }
  }

  register = async (req, res, next) => {
    try {
      const { body } = req
      const result = await serviceRegister(body)
      if (!result) return res.status(200).json({ error: true, massage: 'The account already exists' })
      res.status(201).json({ error: false, massage: 'success' })
    } catch (error) {
      console.log('🚀 ~ file: auth.controller.js ~ line 24 ~ AuthController ~ register= ~ error', error)
      next(error)
    }
  }

  refreshToken = async (req, res, next) => {
    try {
      const { refreshToken } = req.body
      const result = await serviceRefreshToken(refreshToken)
      if (!result) return res.status(200).json({ error: true, message: 'failed' })
      res.status(200).json({ ...result })
    } catch (error) {
      console.log('🚀 ~ file: auth.controller.js ~ line 36 ~ AuthController ~ refreshToken= ~ error', error)
      next(error)
    }
  }

  // resetPassword = async (req, res, next) => {}
}

export default new AuthController()

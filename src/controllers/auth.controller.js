import { serviceLogin, serviceRefreshToken } from '../services/login.service'
import { serviceRegister } from '../services/register.service'

class AuthController {
  login = async (req, res, next) => {
    const { body } = req
    try {
      const result = await serviceLogin(body)
      if (!result) return res.status(400).json({ message: 'Login failed' })
      res.status(200).json({ message: 'success', data: result })
    } catch (error) {
      next()
    }
  }

  register = async (req, res, next) => {
    const { body } = req
    try {
      const result = await serviceRegister(body)
      if (!result) return res.status(200).json({ massage: 'The account already exists or something wrong' })
      res.status(201).json({ massage: 'success' })
    } catch (error) {
      next()
    }
  }

  refreshToken = async (req, res, next) => {
    const { refreshToken } = req.body
    try {
      const result = await serviceRefreshToken(refreshToken)
      if (!result) return res.status(400).json({ message: 'failed' })
      res.status(200).json({ message: 'success', data: result })
    } catch (error) {
      next()
    }
  }

  // resetPassword = async (req, res, next) => {}
}

export default new AuthController()

import { serviceLogin, serviceRefreshToken } from '../services/login.service'
import { serviceCreateUser } from '../services/register.service'

export const register = async (req, res, next) => {
  const { body } = req
  try {
    const result = await serviceCreateUser(body)
    if (!result) return res.status(404).json({ massage: 'failed' })
    res.status(201).json({ massage: 'success' })
  } catch (error) {
    next()
  }
}

export const login = async (req, res, next) => {
  const { body } = req
  try {
    const result = await serviceLogin(body)
    if (!result) return res.status(400).json({ message: 'failed' })
    res.status(201).json({ message: 'success', data: result })
  } catch (error) {
    next()
  }
}

export const refreshToken = async (req, res, next) => {
  const { refreshToken } = req.body
  try {
    const result = await serviceRefreshToken(refreshToken)
    if (!result) return res.status(400).json({ message: 'failed' })
    res.status(200).json({ message: 'success', data: result })
  } catch (error) {
    next()
  }
}

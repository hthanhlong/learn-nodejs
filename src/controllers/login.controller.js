import { serviceLogin } from '../services/login.service.js'

export const loginController = async (req, res) => {
  const { body } = req
  const result = await serviceLogin(body)
  if (result) {
    return res.status(201).json({ status: 'success', data: result })
  } else {
    return res.status(400).json({ elements: 'Login failed!!!' })
  }
}

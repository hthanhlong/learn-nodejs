import { serviceCreateUser } from '../services/register.service'
import { serviceGetUsers } from '../services/user.service'

class UserController {
  createUser = async (req, res, next) => {
    const { body } = req
    try {
      const result = await serviceCreateUser(body)
      if (!result) return res.status(404).json({ massage: 'failed' })
      res.status(201).json({ massage: 'success' })
    } catch (error) {
      next()
    }
  }

  // getUser = async (req, res, next) => {}

  getUsers = async (req, res, next) => {
    try {
      const result = await serviceGetUsers()
      if (!result) return res.status(404).json({ massage: 'failed' })
      res.status(200).json({ message: 'success', data: result })
    } catch (error) {
      next()
    }
  }

  // deleteUser = async (req, res, next) => {}
  // updateUser = async (req, res, next) => {}
}

export default new UserController()

import { serviceGetUsers } from '../services/user.service'

class UserController {
  // getUser = async (req, res, next) => {}

  getUsers = async (req, res, next) => {
    try {
      const result = await serviceGetUsers()
      if (!result) return res.status(200).json({ error: true, massage: 'failed' })
      res.status(200).json({ ...result })
    } catch (error) {
      next()
    }
  }

  // deleteUser = async (req, res, next) => {}
  // updateUser = async (req, res, next) => {}
}

export default new UserController()

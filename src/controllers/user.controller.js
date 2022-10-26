import { serviceGetAllUsers } from '../services/user.service'

export const userController = async (req, res) => {
  try {
    const users = await serviceGetAllUsers()
    if (users?.length > 0) {
      res.status(200).json({
        message: 'success',
        users,
      })
    }
  } catch (error) {
    res.status(400).json({
      massage: 'failed',
    })
  }
}

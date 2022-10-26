import { serviceGetAllUsers } from '../services/user.service'

export const getAllUser = async (req, res, next) => {
  try {
    const result = await serviceGetAllUsers()
    if (!result) return res.status(404).json({ massage: 'failed' })
    res.status(200).json({ message: 'success', data: result })
  } catch (error) {
    next()
  }
}

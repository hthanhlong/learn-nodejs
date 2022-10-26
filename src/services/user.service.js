import db from '../models'

export const serviceGetAllUsers = async () => {
  const users = await db.User.findAll({
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
  })
  if (!users) return null
  return users
}

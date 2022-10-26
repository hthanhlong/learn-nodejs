import db from '../models'

export const serviceGetUsers = async () => {
  const users = await db.User.findAll({
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
  })
  if (!users) return null
  return users
}

import { hashPassword } from '../helper'
import db from '../models'

export const serviceCreateUser = async (data) => {
  if (!data) return null
  const { email, password } = data
  const isUser = await db.User.findOne({
    where: { email: email },
  })
  if (isUser) return null
  const newPassword = hashPassword(password)
  const newData = { ...data, password: newPassword }
  const result = await db.User.create(newData)
  return result
}

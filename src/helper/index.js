import bcrypt from 'bcrypt'

export const hashPassword = (password) => {
  if (!password) return null
  return bcrypt.hashSync(password, bcrypt.genSaltSync(6))
}

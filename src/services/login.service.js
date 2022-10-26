import bcrypt from 'bcrypt'
import db from '../models/index.js'
import { _CONF } from '../config/index.js'
import jwt from 'jsonwebtoken'

const tokenObject = {}
const payload = {}

export const serviceLogin = async (body) => {
  const { email, password } = body
  const isUser = await db.User.findOne({
    where: { email: email },
  })
  const hashPassword = isUser.dataValues.password
  if (!isUser) return null
  const isMatchedPassword = bcrypt.compareSync(password, hashPassword)
  if (!isMatchedPassword) return null
  const roleName = isUser?.dataValues.role || 'admin'
  payload.username = isUser?.dataValues.email
  payload.role = roleName

  const accessToken = jwt.sign(payload, _CONF.SECRET, {
    expiresIn: _CONF.tokenLife,
  })

  const refreshToken = jwt.sign(payload, _CONF.SECRET_REFRESH, {
    expiresIn: _CONF.refreshTokenLife,
  })

  tokenObject.refreshToken = refreshToken
  const response = {
    email: isUser?.dataValues.email,
    roles: roleName,
    accessToken: accessToken,
    refreshToken: refreshToken,
  }

  return response
}

export const serviceRefreshToken = async (refreshToken) => {
  if (tokenObject.refreshToken !== refreshToken) return null

  const accessToken = jwt.sign(payload, _CONF.SECRET, {
    expiresIn: _CONF.tokenLife,
  })
  const response = {
    accessToken: accessToken,
  }
  return response
}

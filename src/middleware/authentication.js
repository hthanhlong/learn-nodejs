import createHttpError from 'http-errors'
import jwt from 'jsonwebtoken'
import { _CONF } from '../config/index'

export const authentication = (req, res, next) => {
  const token = req.headers['authorization']
  if (token) {
    jwt.verify(token, _CONF.SECRET, function (err, decoded) {
      if (err) {
        next(createHttpError(401))
      }
      req.decoded = decoded
      req.user = decoded.user
      next()
    })
  } else {
    next(createHttpError(403))
  }
}

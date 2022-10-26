import jwt from 'jsonwebtoken'
import _CONF from '../config'

export const checkToken = (req, res, next) => {
  const token = req.headers['authorization']
  if (token) {
    jwt.verify(token, _CONF.SECRET, function (err, decoded) {
      if (err) {
        return res.status(401).json({ error: true, message: 'Unauthorized access.', err })
      }
      req.decoded = decoded
      next()
    })
  } else {
    return res.status(403).send({
      error: true,
      message: 'No token provided.',
    })
  }
}

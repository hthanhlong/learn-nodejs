import createHttpError from 'http-errors'

export const authorization = (...roles) => {
  return (req, res, next) => {
    const { user } = req
    if (user && roles.includes(user.role)) {
      next()
    } else {
      next(createHttpError(403))
    }
  }
}

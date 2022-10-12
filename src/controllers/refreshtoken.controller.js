const { serviceRefreshToken } = require('../services/login.service')

const refreshTokenController = async (req, res) => {
  // refresh the damn token
  const { refreshToken } = req.body
  // if refresh token exists
  const result = await serviceRefreshToken(refreshToken)
  if (result) {
    res.status(200).json(result)
  } else {
    res.status(400).send('Invalid request')
  }
}

module.exports = {
  refreshTokenController,
}

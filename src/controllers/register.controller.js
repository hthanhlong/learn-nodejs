const { serviceCreateUser } = require('../services/register.service')

const createUserController = async (req, res) => {
  const { body } = req
  try {
    await serviceCreateUser(body)
  } catch (error) {
    res.status(400).json({
      massage: 'failed',
    })
  }
  res.status(201).json({
    massage: 'success',
  })
}

module.exports = {
  createUserController,
}

import { serviceCreateUser } from '../services/register.service'

export const createUserController = async (req, res) => {
  const { body } = req
  try {
    await serviceCreateUser(body)
  } catch (error) {
    console.log('error =>>>>>>>>>>>>>>>>>>', error)
    res.status(400).json({
      massage: 'failed',
    })
    return
  }
  res.status(201).json({
    massage: 'success',
  })
}

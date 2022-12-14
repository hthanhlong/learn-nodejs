const { Sequelize } = require('sequelize')
const path = require('path')
require('dotenv').config()
const env = process.env.NODE_ENV || 'development'

const config =
  require(path.join(__dirname, '..', 'config', 'configDB.js'))[env] ||
  'development'

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default connectDB

'use strict'
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const process = require('process')
const basename = path.basename(__filename)
const configDB = require('../config/configDB.js')
require('dotenv').config()
const env = process.env.NODE_ENV || 'development'
const config = configDB[env]

const db = {}
let sequelize
if (config?.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    )
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db

//npx sequelize-cli model:generate --name User --attributes email:string,password:string,firstname:string,lastname:string,address:string,phoneNumber:string,gender:boolean,image:string,roleId:string,positionId:string

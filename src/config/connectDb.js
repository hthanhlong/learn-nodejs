const { Sequelize } = require("sequelize");
const path = require("path");
const env = process.env.NODE_ENV || "development";

const config = require(path.join(__dirname, "..", "config", "configDB.json"))[
  env
];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;

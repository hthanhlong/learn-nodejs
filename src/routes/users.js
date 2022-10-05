const express = require("express");
const { userController } = require("../controllers/user.controller");
const checkToken = require("../middleware/checkToken");

const userRoute = express.Router();

userRoute.get("/", checkToken, userController);

module.exports = userRoute;

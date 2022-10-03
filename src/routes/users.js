const express = require("express");
const { userController } = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.get("/", userController);

module.exports = userRoute;

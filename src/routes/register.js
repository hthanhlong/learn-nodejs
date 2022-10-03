const express = require("express");
const { createUserController } = require("../controllers/register.controller");
const registerRoute = express.Router();

registerRoute.post("/", createUserController);

module.exports = registerRoute;

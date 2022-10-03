const express = require("express");
const {
  refreshTokenController,
} = require("../controllers/refreshtoken.controller");
const router = express.Router();
const loginRoute = require("./login");
const registerRoute = require("./register");

//
router.use("/login", loginRoute);
router.use("/register", registerRoute);
router.post("/token", refreshTokenController);

module.exports = router;

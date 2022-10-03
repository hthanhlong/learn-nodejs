const express = require("express");
const {
  refreshTokenController,
} = require("../controllers/refreshtoken.controller");
const router = express.Router();
const loginRoute = require("./login");
const registerRoute = require("./register");
const userRoute = require("./users");

//
router.use("/login", loginRoute);
router.use("/register", registerRoute);
router.use("/users", userRoute);
router.post("/token", refreshTokenController);

module.exports = router;

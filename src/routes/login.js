const express = require("express");
const loginRouter = express.Router();

loginRouter.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok login",
  });
});

module.exports = loginRouter;

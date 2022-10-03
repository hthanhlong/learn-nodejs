const express = require("express");
const registerRoute = express.Router();

registerRoute.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok register",
  });
});

module.exports = registerRoute;

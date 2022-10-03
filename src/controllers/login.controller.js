const jwt = require("jsonwebtoken");
const _CONF = require("../config/index");
const { serviceLogin } = require("../services/login.service");

const loginController = async (req, res, next) => {
  const { body } = req;
  const result = await serviceLogin(body);
  if (result) {
    return res.status(201).json({ status: "success", data: result });
  } else {
    return res.status(403).json({ elements: "Login failed!!!" });
  }
};

module.exports = {
  loginController,
};

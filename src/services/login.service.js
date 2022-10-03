const bcrypt = require("bcrypt");
const db = require("../models/index.js");
const _CONF = require("../config/index");
const jwt = require("jsonwebtoken");
const tokenObject = {};

const serviceLogin = async (body) => {
  const { email, password } = body;
  const isUser = await db.User.findOne({
    where: { email: email },
  });
  if (!isUser) return null;
  const isMatchedPassword = bcrypt.compareSync(
    password,
    isUser.dataValues.password
  );
  if (!isMatchedPassword) return null;

  const payload = {
    username: isUser.email,
    role: isUser.roleId,
  };

  const accessToken = jwt.sign(payload, _CONF.SECRET, {
    expiresIn: _CONF.tokenLife,
  });

  const refreshToken = jwt.sign(payload, _CONF.SECRET_REFRESH, {
    expiresIn: _CONF.refreshTokenLife,
  });

  tokenObject.refreshToken = refreshToken;
  const response = {
    status: "Logged in",
    accessToken: accessToken,
    refreshToken: refreshToken,
  };

  return response;
};

const serviceRefreshToken = async (refreshToken) => {
  if (tokenObject.refreshToken !== refreshToken) return null;

  const accessToken = jwt.sign(user, _CONF.SECRET, {
    expiresIn: _CONF.tokenLife,
  });
  const response = {
    accessToken: accessToken,
  };
  return response;
};

module.exports = {
  serviceLogin,
  serviceRefreshToken,
};

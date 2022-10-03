const { serviceRefreshToken } = require("../services/login.service");

const refreshTokenController = async (req, res, next) => {
  // refresh the damn token
  const { refreshToken } = req.body;
  // if refresh token exists
  const result = await serviceRefreshToken(refreshToken);
  if (result) {
    res.status(200).json(response);
  } else {
    res.status(404).send("Invalid request");
  }
};

module.exports = {
  refreshTokenController,
};

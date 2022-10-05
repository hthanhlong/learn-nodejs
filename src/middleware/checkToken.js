const jwt = require("jsonwebtoken");
const _CONF = require("../config");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log("🚀 ~ file: checkToken.js ~ line 6 ~ token", token)
  if (token) {
    jwt.verify(token, _CONF.SECRET, function (err, decoded) {
      if (err) {
        return res
          .status(401)
          .json({ error: true, message: "Unauthorized access.", err });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).send({
      error: true,
      message: "No token provided.",
    });
  }
};

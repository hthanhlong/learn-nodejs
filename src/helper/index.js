const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  if (!password) return null;
  return bcrypt.hashSync(password, bcrypt.genSaltSync(6));
};

module.exports = {
  hashPassword,
};

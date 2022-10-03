const db = require("../models/index.js");

const serviceCreateUser = async (data) => {
  if (!data) return null;
  const result = await db.User.create(data);
  return result;
};

module.exports = {
  serviceCreateUser,
};

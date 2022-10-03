const db = require("../models/index.js");

const serviceGetAllUsers = async () => {
  if (!data) return null;
  const users = await db.User.findAll();
  if (!users) return null;
  return users;
};

module.exports = {
  serviceGetAllUsers,
};

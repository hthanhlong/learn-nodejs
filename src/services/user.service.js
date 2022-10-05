const db = require("../models/index.js");

const serviceGetAllUsers = async () => {
  const users = await db.User.findAll({
    attributes: { exclude: ["password", "createdAt", "updatedAt"] },
  });
  if (!users) return null;
  return users;
};

module.exports = {
  serviceGetAllUsers,
};

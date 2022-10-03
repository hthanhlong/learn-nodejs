const { hashPassword } = require("../helper/index.js");
const db = require("../models/index.js");

const serviceCreateUser = async (data) => {
  if (!data) return null;
  const { email, password } = data;
  const isUser = await db.User.findOne({
    where: { email: email },
  });
  if (isUser) return null;
  const newPassword = hashPassword(password);
  const newData = { ...data, password: newPassword };
  const result = await db.User.create(newData);
  return result;
};

module.exports = {
  serviceCreateUser,
};

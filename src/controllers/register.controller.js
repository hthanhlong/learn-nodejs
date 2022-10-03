const { serviceCreateUser } = require("../services/register.services");

const createUser = async (req, res, next) => {
  const { body } = req;
  console.log("body", body);
  await serviceCreateUser(body);
  res.status(201).json({
    massage: "success",
  });
};

module.exports = {
  createUser,
};

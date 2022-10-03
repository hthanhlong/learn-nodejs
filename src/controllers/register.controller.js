const { serviceCreateUser } = require("../services/register.service");

const createUserController = async (req, res, next) => {
  const { body } = req;
  try {
    await serviceCreateUser(body);
  } catch (error) {
    console.log("error", error);
  }
  res.status(201).json({
    massage: "success",
  });
};

module.exports = {
  createUserController,
};

const { serviceCreateUser } = require("../services/register.service");
const { serviceGetAllUsers } = require("../services/user.service");

const userController = async (req, res, next) => {
  const token = req.Authorization;
  console.log(token);
  try {
    const users = await serviceGetAllUsers();
    res.status(200).json({
      data: users,
    });
  } catch (error) {}
  res.status(201).json({
    massage: "success",
  });
};

module.exports = {
  userController,
};

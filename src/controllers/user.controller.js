const { serviceCreateUser } = require("../services/register.service");
const { serviceGetAllUsers } = require("../services/user.service");

const userController = async (req, res, next) => {
  try {
    const users = await serviceGetAllUsers();
    if (users?.length > 0) {
      res.status(200).json({
        message: "success",
        users,
      });
    }
  } catch (error) {
    res.status(401).json({
      massage: "failed",
    });
  }
};

module.exports = {
  userController,
};

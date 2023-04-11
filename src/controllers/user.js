const { UserService } = require('../services');

const createNewUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const userInfos = { displayName, email, password, image };
    const token = await UserService.createNewUser(userInfos);
    return res.status(201).json({ token });
  } catch (error) {
    if (error.status) return res.status(error.status).json({ message: error.message });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await UserService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = { createNewUser, getAllUsers };
const { UserService } = require('../services');

const createNewUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const userInfos = { displayName, email, password, image };
    const token = await UserService.createNewUser(userInfos);
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = { createNewUser };
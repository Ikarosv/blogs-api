const { User } = require('../models');
const generateError = require('../utils/generateError');
const generateToken = require('../utils/generateToken');

const createNewUser = async (user) => {
  const { displayName, email, password, image } = user;
  const userInfos = { displayName, email, password, image };
  const newUser = await User.create(userInfos);
  if (!newUser) throw generateError(400, 'Invalid entries. Try again.');
  return generateToken(userInfos);
};

module.exports = { createNewUser };
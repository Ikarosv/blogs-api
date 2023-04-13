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

const excludePassword = { attributes: { exclude: ['password'] } };

const getAllUsers = async () => {
  const users = await User.findAll(excludePassword);
  if (!users) throw generateError(400, 'Invalid entries. Try again.');
  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id, excludePassword);
  if (!user) throw generateError(404, 'User does not exist');
  return user;
};

module.exports = { createNewUser, getAllUsers, getById };
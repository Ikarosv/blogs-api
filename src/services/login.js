const { User } = require('../models');
const generateError = require('../utils/generateError');
const generateToken = require('../utils/generateToken');

const login = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
      password,
    },
    attributes: {
      exclude: ['password'],
    },
  });

  if (!user) {
    throw generateError(400, 'Invalid fields');
  }

  return generateToken(user);
};

module.exports = { login };
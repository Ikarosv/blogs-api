const { User } = require('../models');
const generateError = require('../utils/generateError');
const generateToken = require('../utils/generateToken');

const login = async (email, password) => {
  console.log('bbbbbbbbbbbbbbbbbbbbb');
  const data = await User.findOne({
    where: {
      email,
      password,
    },
    attributes: {
      exclude: ['password'],
    },
  });
  if (!data) {
    throw generateError(400, 'Invalid fields');
  }

  const { dataValues: user } = data;
  console.log('user', user);
  console.log('aaaaaaaaaaaaaaaaaaaaaaa');

  return generateToken(user);
};

module.exports = { login };
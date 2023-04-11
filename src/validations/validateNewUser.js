const joi = require('joi');
const { email, password, displayName, image } = require('./validationsConstants');

const validateNewUser = joi.object({
  email,
  password,
  displayName,
  image,
});

module.exports = { validateNewUser };

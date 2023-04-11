const joi = require('joi');
const { email, password } = require('./validationsConstants');

const validateLoginFields = joi.object({
  email,
  password,
});

module.exports = { validateLoginFields };
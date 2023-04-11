const joi = require('joi');

const validateLoginFields = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

module.exports = { validateLoginFields };
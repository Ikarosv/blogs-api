const joi = require('joi');

const email = joi.string().email().required();
const password = joi.string().min(6).required();
const displayName = joi.string().min(8).required();
const image = joi.string();

module.exports = { email, password, displayName, image };

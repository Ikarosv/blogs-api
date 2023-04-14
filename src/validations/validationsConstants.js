const joi = require('joi');

const email = joi.string().email().required();
const password = joi.string().min(6).required();
const displayName = joi.string().min(8).required();
const image = joi.string();

const categoryName = joi.string().required().label('name');

const title = joi.string().required().label('title');
const content = joi.string().required().label('content');
const categoryIds = joi.array().items(joi.number()).required().label('categoryIds');

module.exports = {
  email,
  password,
  displayName,
  image,
  categoryName,
  title,
  content,
  categoryIds,
};

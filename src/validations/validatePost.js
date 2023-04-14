const joi = require('joi');
const { title, content, categoryIds } = require('./validationsConstants');

const validatePost = joi.object({
  title,
  content,
  categoryIds,
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

module.exports = { validatePost };

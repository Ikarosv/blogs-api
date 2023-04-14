const { validatePost } = require('../validations/validatePost');

module.exports = (req, res, next) => {
  const { error } = validatePost.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};
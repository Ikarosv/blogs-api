const { validateLoginFields } = require('../validations/validateLogin');

module.exports = (req, res, next) => {
  const { email, password } = req.body;

  const validation = validateLoginFields.validate({ email, password });

  if (validation.error) {
    console.log(validation);
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};
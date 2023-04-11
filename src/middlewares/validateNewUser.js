const { validateNewUser } = require('../validations/validateNewUser');

module.exports = (req, res, next) => {
  const { email, password, displayName, image } = req.body;

  const userInfos = { email, password, displayName, image };

  const validation = validateNewUser.validate(userInfos);

  if (validation.error) {
    return res.status(400).json({ message: validation.error.details[0].message });
  }

  next();
};
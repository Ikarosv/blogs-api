const { sign } = require('jsonwebtoken');

module.exports = (payload) => {
  const token = sign(JSON.stringify(payload), process.env.JWT_SECRET, { expiresIn: '2d' });
  return token;
};
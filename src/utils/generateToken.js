const { sign } = require('jsonwebtoken');

module.exports = (payload) => {
  const token = sign(JSON.stringify(payload), process.env.JWT_SECRET);
  return token;
};
const LoginService = require('../services/login');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await LoginService.login(email, password);
    console.log('tokennnnnn', token);
    return res.status(200).json({ token });
  } catch (error) {
    if (error.status) return res.status(error.status).json({ message: error.message });
  }
};

module.exports = { login };
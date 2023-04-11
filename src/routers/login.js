const { Router } = require('express');
const LoginController = require('../controllers/login');
const validateLoginFields = require('../middlewares/validateLoginFields');

const loginRouter = Router();

loginRouter.post('/', validateLoginFields, LoginController.login);

module.exports = loginRouter;
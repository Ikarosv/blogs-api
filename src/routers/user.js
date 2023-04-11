const { Router } = require('express');
const { createNewUser } = require('../controllers/user');
const validateNewUser = require('../middlewares/validateNewUser');
const validateEmailAlreadyExists = require('../middlewares/validateEmailAlreadyExists');

const userRouter = Router();

userRouter.post('/', validateNewUser, validateEmailAlreadyExists, createNewUser);

module.exports = userRouter;

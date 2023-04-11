const { Router } = require('express');
const { createNewUser, getAllUsers } = require('../controllers/user');
const validateNewUser = require('../middlewares/validateNewUser');
const validateEmailAlreadyExists = require('../middlewares/validateEmailAlreadyExists');
const validateToken = require('../middlewares/validateToken');

const userRouter = Router();

userRouter.post('/', validateNewUser, validateEmailAlreadyExists, createNewUser);
userRouter.get('/', validateToken, getAllUsers);

module.exports = userRouter;

const { Router } = require('express');
const userController = require('../controllers/user');
const validateNewUser = require('../middlewares/validateNewUser');
const validateEmailAlreadyExists = require('../middlewares/validateEmailAlreadyExists');
const validateToken = require('../middlewares/validateToken');

const userRouter = Router();

userRouter.post('/', validateNewUser, validateEmailAlreadyExists, userController.createNewUser);
userRouter.get('/', validateToken, userController.getAllUsers);
userRouter.get('/:id', validateToken, userController.getById);

module.exports = userRouter;

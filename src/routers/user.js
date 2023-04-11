const { Router } = require('express');
const { createNewUser } = require('../controllers/user');

const userRouter = Router();

userRouter.post('/', createNewUser);

module.exports = userRouter;

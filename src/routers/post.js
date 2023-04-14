const { Router } = require('express');
const postContollers = require('../controllers/post');
const validateToken = require('../middlewares/validateToken');
const validatePost = require('../middlewares/validatePost');

const postRouter = Router();

postRouter.post('/', validateToken, validatePost, postContollers.createPost);

module.exports = postRouter;

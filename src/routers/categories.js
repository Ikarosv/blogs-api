const { Router } = require('express');
const validateToken = require('../middlewares/validateToken');
const categoriesController = require('../controllers/categories');

const categoriesRouter = Router();

categoriesRouter.post('/', validateToken, categoriesController.createNewCategory);
categoriesRouter.get('/', validateToken, categoriesController.getAllCategories);

module.exports = categoriesRouter;

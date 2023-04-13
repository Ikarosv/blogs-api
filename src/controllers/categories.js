const { CategoriesService } = require('../services');
const generateError = require('../utils/generateError');
const { categoryName } = require('../validations/validationsConstants');

const createNewCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const validateName = categoryName.validate(name);
    if (validateName.error) throw generateError(400, validateName.error.message);
    const category = await CategoriesService.createNewCategory(name);
    return res.status(201).json(category);
  } catch (error) {
    if (error.status) return res.status(error.status).json({ message: error.message });
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createNewCategory };
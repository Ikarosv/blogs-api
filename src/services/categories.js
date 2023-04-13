const { Category } = require('../models');
const generateError = require('../utils/generateError');

const createNewCategory = async (name) => {
  const category = await Category.create({ name });
  if (!category) {
    throw generateError(400, 'Invalid entries. Try again.');
  }
  return category;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  if (!categories) {
    throw generateError(400, 'Invalid entries. Try again.');
  }
  return categories;
};

module.exports = { createNewCategory, getAllCategories };
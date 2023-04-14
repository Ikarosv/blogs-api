const { BlogPost, Category, sequelize, PostCategory } = require('../models');
const generateError = require('../utils/generateError');

const findAllCategories = async (categoryIds, t) => {
  const { count } = await Category.findAndCountAll({
    where: { id: categoryIds },
  }, { transaction: t });

  if (count !== categoryIds.length) {
    throw generateError(400, 'one or more "categoryIds" not found'); 
  }
};

const createPost = async (title, content, categoryIds, userId) => {
  let newPost;
  await sequelize.transaction(async (t) => {
    await findAllCategories(categoryIds, t);

    const now = new Date();
    newPost = await BlogPost.create({ 
      title,
      content,
      userId,
      published: now.toISOString().slice(0, 19),
      updated: now.toISOString().slice(0, 19),
      }, { transaction: t });
    if (!newPost) throw generateError(500, 'Error creating post');

    const categories = await PostCategory.bulkCreate(categoryIds.map((categoryId) => ({
      postId: newPost.id, categoryId,
    })), { transaction: t });
    if (!categories) throw generateError(500, 'Error creating categories');
  });

  return newPost;
};

module.exports = { createPost };
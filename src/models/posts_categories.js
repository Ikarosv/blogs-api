'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts_categories extends Model {
    static associate({ blog_posts, categories }) {
      this.belongsTo(blog_posts, { foreignKey: 'post_id' });
      this.belongsTo(categories, { foreignKey: 'category_id' });
    }
  };
  posts_categories.init({
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    timestamps: false,
    underscored: true,
    sequelize,
    modelName: 'posts_categories',
  });
  return posts_categories;
};
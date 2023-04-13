'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const postsCategories =  sequelize.define('posts_categories', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'blog_posts',
        key: 'id',
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'categories',
        key: 'id',
      }
    }
  }, {
    timestamps: false,
    underscored: true,
    sequelize,
  });

  // postsCategories.associate = ({ blog_posts, categories }) => {
  //   this.belongsTo(blog_posts, { foreignKey: 'post_id' });
  //   this.belongsTo(categories, { foreignKey: 'category_id' });
  // }
 
  return postsCategories;
};
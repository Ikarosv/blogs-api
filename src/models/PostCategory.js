'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const postsCategories =  sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
  }, {
    timestamps: false,
    underscored: true,
    sequelize,
  });

  postsCategories.associate = ({ BlogPost, Category }) => {
    Category.belongsToMany(BlogPost, { foreignKey: 'categoryId', through: postsCategories });
    BlogPost.belongsToMany(Category, { foreignKey: 'postId', through: postsCategories });
  }
 
  return postsCategories;
};
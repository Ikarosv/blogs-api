'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog_posts extends Model {
    static associate({users}) {
      this.belongsTo(users);
    }
  };
  blog_posts.init({
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    timestamps: false,
    underscored: true,
    sequelize,
    modelName: 'blog_posts',
  });
  return blog_posts;
};
'use strict';

module.exports = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    timestamps: false,
    underscored: true,
    sequelize,
  });
  
  blogPosts.associate = ({ User, Category }) => {
    blogPosts.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
    blogPosts.belongsToMany(Category, { foreignKey: 'post_id', through: 'posts_categories', as: 'categories'  });
  }

  return blogPosts;
};
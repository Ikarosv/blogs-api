'use strict';

module.exports = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('blog_posts', {
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
  
  blogPosts.associate = ({ User }) => {
    blogPosts.belongsTo(User);
  }

  return blogPosts;
};
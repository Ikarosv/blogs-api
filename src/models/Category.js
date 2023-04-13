'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    timestamps: false,
  });

  // Category.associate = ({ BlogPost, PostCategory }) => {
  //   Category.belongsToMany(BlogPost, { foreignKey: 'category_id', through: PostCategory, as: 'blog_posts' });
  // };

  return Category;
};
'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    timestamps: false,
    sequelize,
    underscored: true,
  });

  User.associate = ({ blog_posts: blogPosts }) => {
    User.hasMany(blogPosts);
  };

  return User;
};
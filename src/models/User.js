'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ blog_posts }) {
      // define association here
      this.hasMany(blog_posts);
    }
  };
  User.init({
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
    modelName: 'User',
  });
  return User;
};
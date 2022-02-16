"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const { password } = require("pg/lib/defaults");
const jwt = require("jsonwebtoken");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Register, { foreignKey: "username" });
    }
    static hist = async ({ username, password }) => {
      try {
        const log = await User.count({ where: { username: username }})
        return (log);
      } catch (err) {
        console.log(err);
      }
    };
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

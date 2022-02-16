"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const { password } = require("pg/lib/defaults");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  class Register extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static #encrypt = (password) => bcrypt.hashSync(password, 10);

    static register = ({ email, password, username, fullname }) => {
      const encryptedPassword = this.#encrypt(password);

      return this.create({ email, password: encryptedPassword,username, fullname });
    };

    checkPassword = (password) => bcrypt.compareSync(password, this.password);

    generateToken = () => {
      const payload = {
        id: this.id,
        username: this.username,
      };

      const rahasia = "secret admire";
      const token = jwt.sign(payload, rahasia);
      return token;
    };

    static authenticate = async ({ username, password }) => {
      try {
        const user = await this.findOne({ where: { username } });
        if (!user) return Promise.reject("User Not found");
        const isPasswordValid = user.checkPassword(password);
        if (!isPasswordValid) return Promise.reject("Password anda salah");
        return Promise.resolve(user);
      } catch (err) {
        return Promise.reject(err);
      }
    };
  }
  Register.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    fullname: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Register',
  });
  return Register;
};


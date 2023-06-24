'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Temp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Temp.init({
    user_id: DataTypes.INTEGER,
    otp_code: DataTypes.INTEGER,
    token: DataTypes.STRING,
    expired_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User_Temp',
  });
  return User_Temp;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class t_candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  t_candidate.init({
    full_name: DataTypes.STRING,
    dob: DataTypes.STRING,
    pob: DataTypes.STRING,
    gender: DataTypes.STRING,
    year_exp: DataTypes.STRING,
    last_salary: DataTypes.STRING
  }, {
    sequelize,
    modelName: 't_candidate',
  });
  return t_candidate;
};
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class t_job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  t_job.init(
    {
      job_position: DataTypes.STRING,
      city_name: DataTypes.STRING,
      salary: DataTypes.STRING,
      requitments: DataTypes.STRING,
      company_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "t_job",
    }
  );
  return t_job;
};

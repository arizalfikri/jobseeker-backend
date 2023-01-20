"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const jobs = require("../data/jobs.json");
    jobs.forEach((data) => {
      delete data.id;
      data.createdAt = new Date();
      data.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("t_jobs", jobs);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("t_jobs");
  },
};

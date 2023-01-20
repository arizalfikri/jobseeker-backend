const { t_job } = require("../models/index");
const { Op } = require("sequelize");

class jobController {
  static async getAll(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 0;
      const limit = parseInt(req.query.limit) || 4;
      const search = req.query.search_query || "";
      const offset = limit * page;
      console.log("masuk");
      const totalRows = await t_job.count({
        where: {
          [Op.or]: [
            {
              job_position: {
                [Op.like]: "%" + search + "%",
              },
            },
            {
              company_name: {
                [Op.like]: "%" + search + "%",
              },
            },
            {
              city_name: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        },
      });
      console.log(totalRows, "total");
      const totalPage = Math.ceil(totalRows / limit);
      const jobs = await t_job.findAll({
        where: {
          [Op.or]: [
            {
              job_position: {
                [Op.like]: "%" + search + "%",
              },
            },
            {
              company_name: {
                [Op.like]: "%" + search + "%",
              },
            },
            {
              city_name: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        },
        offset: offset,
        limit: limit,
      });
      res.status(200).json({
        jobs,
        limit,
        page,
        totalRows,
        totalPage,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}

module.exports = jobController;

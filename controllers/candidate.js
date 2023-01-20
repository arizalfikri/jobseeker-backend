const { t_candidate } = require("../models/index");
const { Op } = require("sequelize");

class candidateController {
  static async create(req, res) {
    try {
      const newCandidate = await t_candidate.create(req.body);
      res.status(201).json(newCandidate);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
  static async getAll(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 0;
      const limit = parseInt(req.query.limit) || 4;
      const search = req.query.search_query || "";
      const offset = limit * page;
      const totalRows = await t_candidate.count({
        where: {
          [Op.or]: [
            {
              full_name: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        },
      });
      const totalPage = Math.ceil(totalRows / limit);
      const candidates = await t_candidate.findAll({
        where: {
          [Op.or]: [
            {
              full_name: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        },
        offset: offset,
        limit: limit,
      });
      res.status(200).json({
        data: candidates,
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
  static async update(req, res, next) {
    try {
      const id = req.params.id;
      const updatedCandidate = await t_candidate.update(req.body, {
        where: {
          id,
        },
      });
      if (updatedCandidate[0] === 1) {
        res.status(200).json({ message: "Candidate has been changed" });
      } else {
        throw { name: "Candidate not found" };
      }
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedCandidate = await t_candidate.destroy({
        where: {
          id: id,
        },
      });
      console.log(deletedCandidate);
      if (deletedCandidate == 0) {
        throw { name: 404 };
      }
      res.status(200).json({
        message: "successfully deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}

module.exports = {
  candidateController,
};

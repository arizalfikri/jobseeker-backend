const express = require("express");
const { candidateController } = require("../controllers/candidate");
const router = express.Router();

router.get("/", candidateController.getAll);
router.post("/create", candidateController.create);
router.patch("/update/:id", candidateController.update);
router.delete("/delete/:id", candidateController.delete);

module.exports = router;

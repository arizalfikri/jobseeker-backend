const express = require("express");
const router = express.Router();
const candidate = require("./candidateRouter");
const job = require("./jobRouter");

router.use("/candidate", candidate);
router.use("/job", job);

module.exports = router;

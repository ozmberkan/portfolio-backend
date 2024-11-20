const express = require("express");
const { createProject } = require("../controllers/projects");

const router = express.Router();

router.post("/create", createProject);

module.exports = router;

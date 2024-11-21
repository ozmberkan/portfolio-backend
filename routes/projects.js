const express = require("express");
const {
  createProject,
  getAllProjects,
  deleteProject,
} = require("../controllers/projects");

const router = express.Router();

router.post("/create", createProject);
router.get("/allProjects", getAllProjects);
router.delete("/delete/:id", deleteProject);

module.exports = router;

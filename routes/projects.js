const express = require("express");
const {
  createProject,
  getAllProjects,
  deleteProject,
  updateProject,
} = require("../controllers/projects");

const router = express.Router();

router.post("/create", createProject);
router.get("/allProjects", getAllProjects);
router.delete("/delete/:id", deleteProject);
router.put("/update/:id", updateProject);

module.exports = router;

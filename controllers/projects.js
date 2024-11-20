const Project = require("../models/projects");

const createProject = async (req, res) => {
  try {
    const {
      projectTitle,
      projectDescription,
      projectLink,
      projectGithubLink,
      projectTechnology,
      projectStyleTechnology,
      projectVersion,
      projectResponsive,
      projectImage,
    } = req.body;

    const project = await Project.create({
      projectTitle,
      projectDescription,
      projectLink,
      projectGithubLink,
      projectTechnology,
      projectStyleTechnology,
      projectVersion,
      projectResponsive,
      projectImage,
    });

    return res.status(201).json({ project });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createProject };

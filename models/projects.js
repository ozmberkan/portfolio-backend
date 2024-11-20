const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
    required: true,
  },
  projectGithubLink: {
    type: String,
    required: true,
  },
  projectTechnology: {
    type: String,
    required: true,
  },
  projectStyleTechnology: {
    type: String,
    required: true,
  },
  projectVersion: {
    type: String,
    required: true,
  },
  projectResponsive: {
    type: String,
    required: true,
  },
  projectImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);

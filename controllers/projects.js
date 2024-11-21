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

const getAllProjects = async (req, res) => {
  try {
    const allProjects = await Project.find({});
    return res.status(200).json({ allProjects });
  } catch (error) {
    return res.status(500).json({ message: "Bir hata oluştu" });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ message: "Proje bulunamadı" });
    }

    return res.status(200).json({ message: "Proje silindi", deletedProject });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Bir hata oluştu", error: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProject = await Project.findByIdAndUpdate(id, req.body);

    if (!updatedProject) {
      return res.status(404).json({ message: "Proje bulunamadı" });
    }

    return res
      .status(200)
      .json({ message: "Proje güncellendi", updatedProject });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Bir hata oluştu", error: error.message });
  }
};

module.exports = {
  createProject,
  getAllProjects,
  deleteProject,
  updateProject,
};

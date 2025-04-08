const Project = require('../models/project')

class ProjectController {

    static insert(req, res) {
        const { id, name, descrition} = req.body

        const project = new Project(id, name, descrition)
        project.save()

        res.status(201).json(project)
    }

    static findAll(req, res) {
        const projects = Project.findAll()

        res.json(projects)
    }

    static deleteProject(req, res) {
        const id = parseInt(req.params.id)
        Project.delete(id)
        res.status(204).send()
      }
}

module.exports = ProjectController;
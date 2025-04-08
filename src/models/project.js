const projects = []

class Project {
    constructor(id, name, descrition) {
        this.id = id
        this.name = name
        this.descrition = descrition    }

    save() {
        projects.push(this)
    }

    static findAll() {
        return projects
    }

    static delete(id) {
        Project.projects = Project.projects.filter(project => project.id !== id)
      }
}

module.exports = Project

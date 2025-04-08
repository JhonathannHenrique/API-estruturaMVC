const tasks = []

class Task {
    constructor(id, title, status, id_project, id_user) {
        this.id = id
        this.title = title
        this.status = status
        this.id_project = id_project
        this.id_user = id_user
    }

    save() {
        tasks.push(this)
    }

    static findAll() {
        return tasks
    }

    static delete(id) {
        Task.tasks = Task.tasks.filter(task => task.id !== id)
      }
}

module.exports = Task

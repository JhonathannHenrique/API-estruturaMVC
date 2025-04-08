const Task = require('../models/task')

class TaskController {
    
    static insert(req, res) {
        const { id, title, status, id_project, id_user} = req.body

        const task = new Task(id, title, status, id_project, id_user)
        task.save()

        res.status(201).json(task)
    }

    static findAll(req, res) {
        const tasks = Task.findAll()

        res.json(tasks)
    }

    static deleteTask(req, res) {
        const id = parseInt(req.params.id)
        Task.delete(id)
        res.status(204).send()
      }
}

module.exports = TaskController;


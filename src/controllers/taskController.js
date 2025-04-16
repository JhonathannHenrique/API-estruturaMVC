const Task = require('../models/task');

class TaskController {
    async criarTarefa(title, status, id_project, id_user) {
        if (
            title === undefined
            || status === undefined
            || id_project === undefined
            || id_user === undefined

        ) {
            throw new Error('Titulo, status, projeto e usuario são obrigatórios');
        }
        return task;
    }

    async buscarPorId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const task = await Task.findByPk(id);

        if (!task) {
            throw new Error('Tarefa não encontrada');
        }
        return task;
    }

    async alterarProjeto(id, title, status, id_project, id_user) {
        if (
            id === undefined
            || title === undefined
            || status === undefined
            || id_project === undefined
            || id_user === undefined
        ) {
            throw new Error('Id, titulo, status, projeto e usuario são obrigatórios');
        }

        const task = await this.buscarPorId(id);

        task.title = title;
        task.status = status;
        task.id_project = id_project;
        task.id_user = id_user;
        task.save();

        return task;
    }

    async deletarTarefa(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }
        const task = await this.buscarPorId(id);

        task.destroy();
    }

    async listarTarefas() {
        return Task.findAll();
    }
}

module.exports = new TaskController();
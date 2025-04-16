const controller = require('../controllers/taskController');

class TaskApi {
    async criarTarefa(req, res) {
        const title = req.body.title
        const status = req.body.status
        const id_project = req.body.id_project
        const id_user = req.body.id_user;

        try {
            const task = await controller.criarTarefa(title, status, id_project, id_user);
            return res.status(201).send(task);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterarTarefa(req, res) {
        const { id } = req.params;
        const { title, status, id_project, id_user } = req.body;

        try {
            const task = await controller.alterarTarefa(Number(id), title, status, id_project, id_user);
            return res.status(200).send(task);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarTarefa(req, res) {
        const { id } = req.params;

        try {
            await controller.deletarTarefa(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listarTarefas(req, res) {

        try {
            const task = await controller.listarTarefas();
            return res.status(200).send(task);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = new TaskApi();

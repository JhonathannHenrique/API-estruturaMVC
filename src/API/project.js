const controller = require('../controllers/projectController');

class ProjectApi {
    async criarProjeto(req, res) {
        const name = req.body.name
        const descrition = req.body.descrition;

        try {
            const project = await controller.criarProjeto(nome, descrition);
            return res.status(201).send(project);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterarProjeto(req, res) {
        const { id } = req.params;
        const { name, descrition } = req.body;

        try {
            const project = await controller.alterarProjeto(Number(id), name, descrition);
            return res.status(200).send(project);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarProjeto(req, res) {
        const { id } = req.params;

        try {
            await controller.deletarProjeto(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listarProjetos(req, res) {

        try {
            const projects = await controller.listarProjetos();
            return res.status(200).send(projects);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = new ProjectApi();

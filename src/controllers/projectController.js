const Project = require('../models/project');

class ProjectController {
    async criarProjeto(name, descrition) {
        if (
            name === undefined
            || descrition === undefined
        ) {
            throw new Error('Nome e descrição são obrigatórios');
        }
        return project;
    }

    async buscarPorId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const project = await Project.findByPk(id);

        if (!project) {
            throw new Error('Projeto não encontrado');
        }
        return project;
    }

    async alterarProjeto(id, name, descrition) {
        if (
            id === undefined
            || name === undefined
            || descrition === undefined
        ) {
            throw new Error('Id, nome, descrição são obrigatórios');
        }

        const project = await this.buscarPorId(id);

        project.name = name;
        project.descrition = descrition;
        project.save();

        return project;
    }

    async deletarProjeto(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }
        const project = await this.buscarPorId(id);

        project.destroy();
    }

    async listarProjetos() {
        return Project.findAll();
    }
}

module.exports = new ProjectController();
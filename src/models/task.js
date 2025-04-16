const database = require('../config/database');

class Task {
    constructor() {
        this.model = database.define('tasks', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: database.Sequelize.STRING
            },
            status: {
                type: database.Sequelize.STRING
            },
            id_project: {
                type: database.Sequelize.INTEGER
            },
            id_user: {
                type: database.Sequelize.INTEGER
            }
        });
    }
}

module.exports = (new Task).model;

const database = require('../config/database');

class Project {
    constructor() {
        this.model = database.define('projects', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.Sequelize.STRING
            },
            descrition: {
                type: database.Sequelize.STRING
            }
        });
    }
}

module.exports = (new Project).model;

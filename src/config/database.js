const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bdprovamvc', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

const chalk = require('chalk');
const Sequelize = require('sequelize');

console.log(chalk.yellow('opening database connection'))

const db = new Sequelize('postgres://localhost:5432/acme_schools_db', { logging: false });

module.exports = db


const chalk = require('chalk');
const Sequelize = require('sequelize');
// const pkg = require('../../package-lock.json')

console.log(chalk.yellow('opening database connection'))

const db = new Sequelize('postgres://localhost:5432/acme_schools_db', { logging: false });

module.exports = db
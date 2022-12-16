const Sequelize = require('sequelize');
const db = require('../database')

module.exports = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING(1000),
        defaultValue: "https://images.unsplash.com/photo-1508302882073-8af6be4c6688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        validate: {
            isUrl: true
        }
    },
    address: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    }
})
const Sequelize = require('sequelize');
const db = require('../database')

module.exports = db.define('campground', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
            min: 0,
            isDecimal: true,
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.TEXT,
        validate: {
            isUrl: true
        }
    }
})
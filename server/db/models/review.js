const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('review', {
  body: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
      isInt: {
        msg: 'Must be an integer number - Rating 0 - 5',
      },
    },
  },
});

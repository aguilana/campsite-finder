const Sequelize = require('sequelize');
const db = require('../database');
const bcrypt = require('bcrypt');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.ENUM(['CUSTOMER', 'ADMIN']),
  },
});

// static method to find user by email
User.findByEmail = async function (email) {
  return await this.findOne({ where: { email } });
};

// check if password is correct
User.prototype.correctPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = User;

const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F81-813810_transparent-group-of-students-png-college-student-cartoon.png&f=1&nofb=1&ipt=bf172ecef81476de06e3b8ea71d1d8633b7e543297f975e401e3c48351d40398&ipo=images",
    validate: {
      isUrl: true,
    },
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      isFloat: true,
      min: 0,
      max: 4,
    },
  },
});

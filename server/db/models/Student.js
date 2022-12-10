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
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F17500000%2Fcool-backgrounds-random-17514363-800-640.jpg&f=1&nofb=1&ipt=662e7efa5e29f0825acd91409c1f6c5adf7a383112323ce2b46ac6d42317c80d&ipo=images",
    validate: {
      isUrl: true,
    },
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      isDecimal: true,
      min: 0,
      max: 4,
    },
  },
});

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
        defaultValue: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.yourcampusimage.com%2Fwp-content%2Fuploads%2F2013%2F06%2Fsmallblogtampa26dsc_1350_1_2_fused.jpg&f=1&nofb=1&ipt=aed4313de1f1ea2241092018f11ef715818181cfe012f9948147aba7e5ffc59f&ipo=images",
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
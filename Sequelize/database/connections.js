const Sequelize = require('sequelize');
const Sequelize = new Sequelize ("twitter", 'root','',{ host:'127.0.0.1',dialect : "mysql", operatorAlias: false});

module.exports = sequelize;
global.sequelize = sequelize;

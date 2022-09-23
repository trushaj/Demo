const Sequelize = require ("sequelize");

module.experts = Sequelize, define("Tweets",{
    content: Sequelize.STRING(300),
    id:{
        type : Sequelize.INTEGER(11),
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
});
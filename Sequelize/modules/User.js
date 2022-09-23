const Sequelize = require ("sequelize");

module.experts = Sequelize, define("User",{
    content: Sequelize.STRING(300),
    id:{
        type : Sequelize.INTEGER(11),
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    username:{
        type:Sequelize.STRING(35),
        allowNull:false,
        unique:true
    },
    passwd:{
        type: Sequelize.STRING(20),
        allowNull:false
    }
});
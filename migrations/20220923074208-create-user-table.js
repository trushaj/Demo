'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("tweets",{
      id:{
        type : Sequelize.INTEGER(11),
        allowNull : false,
        autoIncrement : true,
        primaryKey : true,
    },
    username:{
      type:Sequelize.STRING(35),
      allowNull:false,
      unique:true
  },
  passwd:{
      type: Sequelize.STRING(20),
      allowNull:false
  },
      userId: Sequelize.INTEGER(11),
      content:Sequelize.STRING(300),
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE,

      },
    )},
  },

  async (queryInterface, Sequelize) =>{
    return queryInterface.dropTable("tweets");
  };

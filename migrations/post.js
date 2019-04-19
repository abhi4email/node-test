const Sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('post', {
         id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING(110),
      allowNull: false
    },
    text: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    hits: {
      type: Sequelize.INTEGER(11),
      allowNull: true 
    },
    
    createdAt: {
      type:  Sequelize.DATE,
      allowNull: true  ,
      defaultValue:Sequelize.NOW
    },
    updatedAt: {
      type:  Sequelize.DATE,
      allowNull: true,
      defaultValue:Sequelize.NOW 
    }
      });
  }
}

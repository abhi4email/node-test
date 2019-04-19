const Sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categories', {
   id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    count: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    }
      });
  }
}

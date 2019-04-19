const Sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('post_categories', {
   id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    post_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      references: {
        model: 'post',
        key: 'id'
      },
       
    },
    category_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      },
       
    },
      });
  }
}

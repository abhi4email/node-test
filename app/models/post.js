const sequelize = require('../_helpers/db');
const Sequelize = require('sequelize');


let Post = sequelize.define('post', {
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
      allowNull: false,
      defaultValue: 0
    },
    
    createdAt: {
      type:  'TIMESTAMP',
      allowNull: true,
      defaultValue:Sequelize.NOW
    },
    updatedAt: {
      type:  'TIMESTAMP',
       
      allowNull: true,
    },
    
  }, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  });

  

  module.exports=Post;


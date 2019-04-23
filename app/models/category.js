const sequelize = require('../_helpers/db');
const Sequelize = require('sequelize');


let Category = sequelize.define('categories', {
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
    
  }, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  });

  Category.topRead = async function(){
	  
	  return sequelize.query("select sum(hits) as ctr,categories.title from post inner join post_categories on post_categories.post_id=post.id inner join categories on categories.id=post_categories.category_id group by categories.title order by ctr desc", { type: sequelize.QueryTypes.SELECT}) 
  }

  module.exports=Category;


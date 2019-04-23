const sequelize = require('../_helpers/db');
const Sequelize = require('sequelize');


let PostCaegories = sequelize.define('post_categories', {
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
    
  }, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  });

  PostCaegories.deleteRecords = async function(obj){
	 try{
	 obj.forEach(async function(el){
		 await PostCaegories.destroy({where: {post_id:el.post_id,category_id:el.category_id}});
	 })	 
		 
	 }catch(err){} 
	 return true;	
  }

  module.exports=PostCaegories;


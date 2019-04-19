
const Joi = require('joi');
const Category= require('../models/category');
const CategoryPost= require('../models/post_category');
 

/*
 * POST /category to save a new category.
 */

exports.createCategory= async function(req,res,next){
	try{
		var request=req.body;
		 
		var jioObj = {
            title: Joi.string().required(),
            add_post:Joi.optional()
        }
        schema = Joi.object().keys(jioObj);
        result = Joi.validate(request, schema);
        if(result.error !== null){
            return res.status(400).json({status:false, message:'Field ' +  result.error.details[0].message });
        }
        
        
		var data= await Category.findOne({where:{title:request.title}});			 
        if(data){
			return res.status(400).json({success:false,message:"Category already exist"}) 
		}
		
		if(request.add_post && Array.isArray(request.add_post)) request.count= request.add_post.length;
        data = await Category.build({title:request.title}).save();
        var postsCat=[];
        if(data && request.add_post && Array.isArray(request.add_post)){
			request.add_post.forEach(function(el){				
				postsCat.push({post_id:el,category_id:data.id})
			})	
			
			if(postsCat.length>0){
			  	await CategoryPost.bulkCreate(postsCat);
			}
			
		}
        if(!data) return res.status(400).json({success:false,message:"Something gone wrong"});
        return res.status(200).json({success:true})
        
      }catch(err){
		   console.log(err);
		   return res.status(500).json({success:false,message:err})  
	  }  
        
}


/*
 * PUT /cagetory/:id to updatea a category given its id
 */
exports.editCategory= async function(req,res,next){
	try{
		
		var postID=req.params['id'];
		var request=req.body;
		var jioObj = {
            title: Joi.string().required(),    
            add_post:Joi.optional(),
            delete_post:Joi.optional()
        }
        schema = Joi.object().keys(jioObj);
        result = Joi.validate(request, schema);
        if(result.error !== null){
            return res.status(400).json({status:false, message:'Field ' +  result.error.details[0].message });
        }
		
		var data= await Category.findOne({where:{id:postID}});
		if(!data){
			return res.status(400).json({status:false, message:'Category Not found' });
		}			 
        var counter=data.count;
        if(request.add_post && Array.isArray(request.add_post)){
				if(request.delete_post && Array.isArray(request.delete_post)){
					counter= (data.count + request.add_post.length) -request.delete_post.length; 
				}else{
					counter= (data.count + request.add_post.length)
				}	
		}else if(request.delete_post && Array.isArray(request.delete_post)){
			    counter= data.count -request.delete_post.length; 
		}	
		
        await Category.update({title:request.title,count:counter},{where: {id:data.id}});
		var postsCat=[]
		if(  request.add_post && Array.isArray(request.add_post)){
				request.add_post.forEach(function(el){				
					postsCat.push({post_id:el,category_id:data.id})
				})	
				
				if(postsCat.length>0){
					await CategoryPost.bulkCreate(postsCat);
				}
		
		}
		postsCat=[]
		if(  request.delete_post && Array.isArray(request.delete_post)){
				request.delete_post.forEach(function(el){				
					postsCat.push({post_id:el,category_id:data.id})
					
				})	
				
				if(postsCat.length>0){
				   await CategoryPost.deleteRecords(postsCat);	
				}
		
		}		
		
		return res.status(200).json({success:true})
        
      }catch(err){
		   console.log(err);
		   return res.status(500).json({success:false})  
	  }  
        
}

/*
 * GET /category route to retrieve all the category.
 */

exports.getCategory= async function(req,res,next){
	try{
		
					 
        
        var data= await Category.findAll({});
        if(data){
			return res.status(200).json({success:true,data:data})
		}else{
			return res.status(400).json({success:false,message:"Something gone wrong"});
		}
        
        
      }catch(err){
		   console.log(err);
		   return res.status(500).json({success:false})  
	  }  
        
}


/*
 * GET /top-category route to retrieve all the category based on their number of related post.
 */
exports.topCategory= async function(req,res,next){
	try{
		
					 
        
        var data= await Category.findAll({order: [['count', 'DESC']]});
        if(data){
			return res.status(200).json({success:true,data:data})
		}else{
			return res.status(400).json({success:false,message:"Something gone wrong"});
		}
        
        
      }catch(err){
		   console.log(err);
		   return res.status(500).json({success:false})  
	  }  
        
}

/*
 * GET /top-read-category route to retrieve all the category based on user hit on related blog.
 */
exports.topCategoryRead= async function(req,res,next){
	try{
		
					 
        
        var data= await Category.topRead();
        if(data){
			return res.status(200).json({success:true,data:data})
		}else{
			return res.status(400).json({success:false,message:"Something gone wrong"});
		}
        
        
      }catch(err){
		   console.log(err);
		   return res.status(500).json({success:false})  
	  }  
        
}

/*
 * GET /category/:id route to retrieve a category given its id.
 */
exports.getCategoryById= async function(req,res,next){
	try{
		
					 
        
        var data= await Category.find({where:{id:req.params.id}});
        if(data){
			return res.status(200).json({success:true,data:data})
		}else{
			return res.status(400).json({success:false,message:"Something gone wrong"});
		}
        
        
      }catch(err){
		   console.log(err);
		   return res.status(500).json({success:false})  
	  }  
        
}

/*
 * DELETE /category/:id to delete a category given its id.
 */
exports.deleteCategory= async function(req,res,next){
	try{
		
		var postID=req.params['id'];
		
		
		var data= await Category.findOne({where:{id:postID}});
		if(!data){
			return res.status(400).json({status:false, message:'Category Not found' });
		}			 
        
        await Category.destroy({where: {id:data.id}});
        await CategoryPost.destroy({where: {category_id:data.id}});
        return res.status(200).json({success:true});
        
      }catch(err){
		   console.log(err);
		   return res.status(500).json({success:false})  
	  }  
        
}


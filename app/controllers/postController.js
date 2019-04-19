
const Joi = require('joi');
const Post= require('../models/post');
const Sequelize = require('sequelize');


exports.createPost= async function(req,res,next){
	try{
		var request=req.body;
		var jioObj = {
            title: Joi.string().required(),    
            text: Joi.string().required()
        }
        schema = Joi.object().keys(jioObj);
        result = Joi.validate(request, schema);
        if(result.error !== null){
            return res.status(400).json({status:false, message:'Field ' +  result.error.details[0].message });
        }
        
        var slug=request.title.toString().toLowerCase()
					.replace(/\s+/g, '-')            
					.replace(/[^\w\-]+/g, '')        
					.replace(/\-\-+/g, '-')          
					.replace(/^-+/, '')              
					.replace(/-+$/, ''); 
					
		
		var duplicate=0;
		var data= await Post.findOne({where:{slug:slug}});			 
        if(data) duplicate=1;
        request.slug=slug;
        data = await Post.build(request).save();
        if(data && duplicate==1){
			await Post.update({slug:slug +'-'+data.id},{where: {id:data.id}}); 
		}
        if(!data) return res.status(400).json({success:false,message:"Something gone wrong"});
        return res.status(200).json({success:true})
        
      }catch(err){
		   console.log(err);
		   return res.status(500).json({success:false,message:err})  
	  }  
        
}

exports.editPost= async function(req,res,next){
	try{
		
		var postID=req.params['id'];
		var request=req.body;
		var jioObj = {
            title: Joi.string().required(),    
            text: Joi.string().required()
        }
        schema = Joi.object().keys(jioObj);
        result = Joi.validate(request, schema);
        if(result.error !== null){
            return res.status(400).json({status:false, message:'Field ' +  result.error.details[0].message });
        }
		
		var data= await Post.findOne({where:{id:postID}});
		if(!data){
			return res.status(400).json({status:false, message:'Post Not found' });
		}			 
        
        data= await Post.update(request,{where: {id:data.id}});
        if(data){
			return res.status(200).json({success:true})
		}else{
			return res.status(400).json({success:false,message:"Something gone wrong"});
		}
        
        
      }catch(err){
		   console.log(err);
		   return res.status(500).json({success:false})  
	  }  
        
}

exports.getPost= async function(req,res,next){
	try{
		
					 
        
        var data= await Post.findAll({});
       
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

exports.getPostById= async function(req,res,next){
	try{
		
					 
        
        var data= await Post.find({where:{id:req.params.id}});
         await Post.update({hits:data.hits+1},{where: {id:data.id}}); 
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


exports.deletePost= async function(req,res,next){
	try{
		
		var postID=req.params['id'];
		
		
		var data= await Post.findOne({where:{id:postID}});
		if(!data){
			return res.status(400).json({status:false, message:'Post Not found' });
		}			 
        
        await Post.destroy({where: {id:data.id}});
        return res.status(200).json({success:true});
        
      }catch(err){
		   console.log(err);
		   return res.status(500).json({success:false})  
	  }  
        
}

exports.search= async function(req,res,next){
	try{
		
		var postID=req.query['s'];
		const Op = Sequelize.Op
		
		
		var data= await Post.findAll({where:{
			  [Op.or]: [
					{
					  title: {
						[Op.like]: '%'+ postID +'%'
					  }
					},
					{
					  text: {
						[Op.like]: '%'+ postID +'%'
					  }
					}
				  ]
			}});
		if(!data){
			return res.status(400).json({status:false, message:'Post Not found' });
		}			 
        
       
        return res.status(200).json({success:true,data:data});
        
      }catch(err){
		   console.log(err);
		   return res.status(500).json({success:false})  
	  }  
        
}


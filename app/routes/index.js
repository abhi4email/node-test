const PostCtrl = require('../controllers/postController');
const CatCtrl = require('../controllers/categoryController');

    
module.exports = function(app) {
	
	app.post('/posts',PostCtrl.createPost);
	app.put('/posts/:id',PostCtrl.editPost);
	app.get('/posts',PostCtrl.getPost);
	app.get('/posts/:id',PostCtrl.getPostById);
	app.delete('/posts/:id',PostCtrl.deletePost);
	
	app.post('/category',CatCtrl.createCategory);
	app.put('/category/:id',CatCtrl.editCategory);
	app.get('/category',CatCtrl.getCategory);
	app.get('/category/:id',CatCtrl.getCategoryById);
	app.delete('/category/:id',CatCtrl.deleteCategory);
	
	app.get('/top-category',CatCtrl.topCategory);
	
	app.get('/top-read-category',CatCtrl.topCategoryRead);
	
	app.get('/search',PostCtrl.search);

	
		
};




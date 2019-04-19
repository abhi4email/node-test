Node(test project) Installation Guide
===========================================================================

Rest based API to manage post & category

===========================================
1) git clone https://github.com/abhi4email/node-test.git
2) navigate to the folder api and run 'npm install'
3) Change Mongo configuration - app/_helper/config.js line 2

Running Migrations
This will create all required tables on DB : npx sequelize db:migrate

Running Application
npm start

Running Test
npm test

By Default Api will be run at http://localhost:3000

===========================================

API List: 


Create a new post:
`$ curl -x POST 'http://localhost:3000/posts' -d {'title': 'Movie', 'text': 'Avengers end game'}`

Update post:
`$ curl -x PUT 'http://localhost:3000/posts/2' -d {'title': 'Movie', 'text': 'Avengers end game 2'}`








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
	

===========================================
Tags: 

REST API - Node.js + sequelize +mocha

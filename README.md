Node(test project) Installation Guide
===========================================================================

Rest based API to manage post & category

===========================================
1) git clone https://github.com/abhi4email/node-test.git
2) navigate to the folder api and run 'npm install'
3) Change DB configuration - app/_helper/config.js line 2

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

Get all posts:
`$ curl -x GET 'http://localhost:3000/posts'}`

Get single posts:
`$ curl -x GET 'http://localhost:3000/posts/2'}`

Delete single posts:
`$ curl -x DELETE 'http://localhost:3000/posts/2'}`


Create a new category:
`$ curl -x POST 'http://localhost:3000/category' -d {'title': 'Movie', 'add_post': '[1,2]'}`

Update category:
`$ curl -x PUT 'http://localhost:3000/category/2' -d {'title': 'Movie' }`

Get all category:
`$ curl -x GET 'http://localhost:3000/category'}`

Get single category:
`$ curl -x GET 'http://localhost:3000/category/2'}`

Delete single posts:
`$ curl -x DELETE 'http://localhost:3000/category/2'}`

Get Top category    
`$ curl -x GET 'http://localhost:3000/top-category'}`
	
Get Top read category	
`$ curl -x GET 'http://localhost:3000/top-read-category'}`
	
Get get result
`$ curl -x GET 'http://localhost:3000/search?s=movie'}`
	

===========================================
Tags: 

REST API - Node.js + sequelize +mocha

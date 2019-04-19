//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let Sequelize = require('sequelize');
let Posts = require('../app/models/post');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Posts', () => {

/*
  * Test the /GET route
  */
  describe('/GET posts', () => {
      it('it should GET all the blog', (done) => {
        chai.request(server)
            .get('/posts')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
              done();
            });
      });
  });


 /*
  * Test the /POST route
  */

  describe('/POST posts', () => {
      it('it should POST a blog ', (done) => {
          let blog = {
              title: "The Rings",
              text: "This is demo blog content "
          }
        chai.request(server)
            .post('/posts')
            .send(blog)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
              done();
            });
      });

       it('it should not POST a blog without pages field', (done) => {
          let blog = {
              text: "This is demo blog content "
          }
        chai.request(server)
            .post('/posts')
            .send(blog)
            .end((err, res) => {
                  res.should.have.status(400);
                  res.body.should.be.a('object');
              done();
            });
      });

  });

  /*
  * Test the /GET/:id route
  */
  describe('/GET/:id posts', () => {
      it('it should GET a blog by the given id', (done) => {
          
            chai.request(server)
            .get('/posts/' + '3')
            .send()
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('data');
              done();
            });
         

      });
  });


  /*
  * Test the /PUT/:id route
  */
  describe('/PUT/:id posts', () => {
      it('it should UPDATE a blog given the id', (done) => {
          
            chai.request(server)
            .put('/posts/' + '3')
            .send({title: "Narnia 2", text: "The Chronicles of Narnia"})
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  //res.body.should.have.property('message').eql('blog updated!');
              done();
            
          });
      });
  });


  /*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id posts', () => {
      it('it should DELETE a posts given the id', (done) => {
          //let posts = new posts({title: "The Chronicles of Narnia"})
          
              chai.request(server)
              .delete('/posts/' + '3')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    //res.body.should.have.property('message').eql('blog successfully deleted!');
                done();
              });
        });
  });
  
});
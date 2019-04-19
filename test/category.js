//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let Sequelize = require('sequelize');
let Posts = require('../app/models/category');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Category', () => {

/*
  * Test the /GET route
  */
  describe('/GET category', () => {
      it('it should GET all the category', (done) => {
        chai.request(server)
            .get('/category')
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

  describe('/POST category', () => {
      it('it should POST a category ', (done) => {
          let cat = {
              title: "The Rings"
          }
        chai.request(server)
            .post('/category')
            .send(cat)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
              done();
            });
      });

       it('it should not POST a category without field', (done) => {
          let cat = {
          }
        chai.request(server)
            .post('/category')
            .send(cat)
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
  describe('/GET/:id category', () => {
      it('it should GET a category by the given id', (done) => {
          
            chai.request(server)
            .get('/category/' + '3')
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
  describe('/PUT/:id category', () => {
      it('it should UPDATE a category given the id', (done) => {
          
            chai.request(server)
            .put('/category/' + '3')
            .send({title: "Movies"})
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
  describe('/DELETE/:id category', () => {
      it('it should DELETE a category given the id', (done) => {
          //let posts = new posts({title: "The Chronicles of Narnia"})
          
              chai.request(server)
              .delete('/category/' + '3')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    //res.body.should.have.property('message').eql('category successfully deleted!');
                done();
              });
        });
  });
  
});
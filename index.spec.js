const request = require('supertest');
const express = require('express');
const indexRouter = require('./routes/index');


const app = express();
app.use('/', indexRouter);

describe('GET /', function() {
  it('should respond with HTTP 200 status', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });

  
});

describe('GET /home', function() {
  it('should respond with HTTP 200 status', function(done) {
    request(app)
      .get('/home')
      .expect(200, done);
  });


});
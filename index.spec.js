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

describe('GET /gone', function() {
  it('should respond with HTTP 400 status', function(done) {
    request(app)
      .get('/home')
      .expect(400, done);
  });


});

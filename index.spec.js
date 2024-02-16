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

  it('should respond with a title', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        if (err) return done(err);
        res.text.should.include('Express');
        done();
      });
  });
});

describe('GET /home', function() {
  it('should respond with HTTP 200 status', function(done) {
    request(app)
      .get('/home')
      .expect(200, done);
  });

  it('should respond with a title', function(done) {
    request(app)
      .get('/home')
      .end(function(err, res) {
        if (err) return done(err);
        res.text.should.include('welcome to session');
        done();
      });
  });
});
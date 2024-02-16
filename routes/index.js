var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send('welcome to express');
});

router.get('/home', function(req, res, next) {
  res.status(200).send('welcome to session');
});

router.get('/session', function(req, res, next) {
  res.status(200).send('welcome to github devop');
});

router.get('/vulnerable', function(req, res, next) {
  const userMessage = req.query.message;
  res.status(200).send(`User message: ${userMessage}`);
});

module.exports = router;

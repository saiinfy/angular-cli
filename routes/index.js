var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send('welcome to express');
});

router.get('/home', function(req, res, next) {
  res.status(200).send('welcome to session');
});

module.exports = router;

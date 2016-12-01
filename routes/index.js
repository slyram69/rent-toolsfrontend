var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tools' });
});


/* GET powertools page. */
router.get('/power', function(req, res, next) {
  res.render('power', { title: 'Power Tools' });
});


module.exports = router;

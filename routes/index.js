var express = require('express');
var router = express.Router();

//models
// var Items = require('../models/Item.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tools' });
});


/* GET powertools page. */
router.get('/power', function(req, res, next) {
  // Item.find({'category': 'power'},function(err, products){
  //      console.log(products);
  res.render('power', { title: 'Power Tools' });
});

/* GET penumatictools page. */
router.get('/pneumatic', function(req, res, next) {
  // Item.find({'category': 'penumatic'},function(err, products){
  //      console.log(products);
  res.render('pneumatic', { title: 'Pneumatic Tools' });
});

/* GET machinetools page. */
router.get('/machine', function(req, res, next) {
  // Item.find({'category': 'machine'},function(err, products){
  //      console.log(products);
  res.render('machine', { title: 'Machine Tools' });
});

module.exports = router;

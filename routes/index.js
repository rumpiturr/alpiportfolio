//index.js Alperen Yildirim 301311913 27/09/2013

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page_name: 'home' });
});
router.get('/about',function(req, res, next){
  res.render('about-me', { page_name: 'about' })
});
router.get('/contact',function(req, res, next){
  res.render('contact', { page_name: 'contact' })
});
router.get('/skills',function(req, res, next){
  res.render('my-skills', { page_name: 'skills' })
});
router.get('/portfolio',function(req, res, next){
  res.render('portfolio', { page_name: 'portfolio' })
});
module.exports = router;

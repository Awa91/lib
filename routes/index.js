var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //
 // res.render('index', { title: 'Express' });
 //Redirect the default content to the new content
 res.redirect("/catalog");
});

module.exports = router;

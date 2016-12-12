var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('profile', { title: 'Profile', name: 'Katie', parksVisited: 51, parksRemaining: 8});
});

module.exports = router;

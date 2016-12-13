var express = require('express');
var router = express.Router();
var Park = require('../models/park.js');


// Error handling
function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

// INDEX
router.get('/', function(req, res, next) {
  // get all the todos and render the index view
  Park.find({}).sort( {fullName: 1} )
  .then(function(parks) {
    res.render('parks', { parks: parks } );
  }, function(err) {
    return next(err);
  });
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('parks', { title: 'National Parks' });
// });

module.exports = router;

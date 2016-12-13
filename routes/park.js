var express = require('express');
var router = express.Router();
var Park = require('../models/park.js');

// /* GET home page. */
// router.get('/:parkName', function(req, res, next) {
//   var parkName = req.params.parkName;

// SHOW
router.get('/:id', function(req, res, next) {
    Park.findById(req.params.id)
        .then(function(park) {
            if (!park) return next(makeError(res, 'Document not found', 404));
            res.render('park', {
                park: park
            });
        }, function(err) {
            return next(err);
        });
});

module.exports = router;

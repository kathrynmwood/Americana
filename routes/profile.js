var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

// SHOW
router.get('/:id', function(req, res, next) {
    User.findById(req.params.id)
        .then(function(user) {
            if (!user) return next(makeError(res, 'Document not found', 404));
            res.render('profile', {
                user: user
            });
        }, function(err) {
            return next(err);
        });
});

module.exports = router;

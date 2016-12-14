var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

// SHOW
router.get('/', function(req, res, next) {
    if (req.user) {
        var userId = req.user._id;
        User.findById(userId, function(err, user) {
            if (err) {
                return next(err);
            } else {
                res.render('profile', {
                    user: user
                });
            }
        });

    } else {
        return res.redirect('/');
    }

});

module.exports = router;

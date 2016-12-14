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
                console.log(user);
                res.render('profile', {
                    user: user
                });
            }
        });

    } else {
        return res.redirect('/');
    }

});


// Adds park.id to user document
router.get('/bucketlist/add/:id', function(req, res, next) {
    req.user.parksBucketList.push(req.params.id);
    req.user.save()
        .then(function() {
            res.redirect('/profile');
        }, function(err) {
            return next(err);
        });
});

module.exports = router;

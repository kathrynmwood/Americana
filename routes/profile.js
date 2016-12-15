var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Park = require('../models/park.js');

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


// Adds park.id to user document under parksBucketList
router.get('/bucketlist/add/:id', function(req, res, next) {
    req.user.parksBucketList.push(req.params.id);
    req.user.save()
        .then(function() {
            res.redirect('/profile');
        }, function(err) {
            return next(err);
        });


    // Attempt at populating park info into cards
    for (let i = 0; i < req.user.parksBucketList.length; i++) {
        Park.findOne({
                _id: req.user.parksBucketList[i]
            })
            .populate('name') // <- pull in park name data
            .exec(function(err, park) {
                if (err) {
                    return console.log(err);
                } else {
                    console.log(park.name + ' is the name of this park.');
                }
                // console.log('what was that park?', park);
            });
    }
});


// Adds park.id to user document under parksVisited
router.get('/visited/add/:id', function(req, res, next) {
    req.user.parksVisited.push(req.params.id);
    req.user.save()
        .then(function() {
            res.redirect('/profile');
        }, function(err) {
            return next(err);
        });
});

// DESTROY
router.get('/bucketlist/delete/:id', function(req, res, next) {
    let park = req.user.parksBucketList(req.params.id);
    let index = req.user.parksBucketList.indexOf(park);
    res.send(req.params.id);
    console.log(index);
    req.user.parksBucketList.splice(index, 1);
    req.user.save()
        .then(function(saved) {
            res.redirect('/profile');
        }, function(err) {
            return next(err);
        });
});






module.exports = router;

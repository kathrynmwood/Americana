var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:parkName', function(req, res, next) {
  var parkName = req.params.parkName;

parkSchema.find({parkName:parkName}, function(err,result){
if(err){
  return next(err);
}else{
res.render('park', {title: parkName, data: result});

}

})


});

module.exports = router;

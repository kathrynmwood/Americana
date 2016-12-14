var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
    local: {
      email: String,
      password: String
    },
    parksVisited:    [ { type: mongoose.Schema.Types.ObjectId, ref: 'Park' } ],
    parksBucketList: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Park' } ]
  });

UserSchema.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(4));
};

UserSchema.methods.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);

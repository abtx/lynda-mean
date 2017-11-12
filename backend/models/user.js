var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  email: String,
  pass: String
});

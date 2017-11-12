var Message = require('../models/message');

module.exports = {
  get: function(req, res) {
    // get all messages '({})'
    Message.find({}).exec(function(err, result){
      res.send(result);
    })
  },
  post: function(req, res) {
    console.log(req.body);
    var message = new Message(req.body);

    message.save();

    res.status(200);
  }
}

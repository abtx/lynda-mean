// deal with cors
//  middleware functions need to call next() in order to unblock the app
module.exports = function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
 };

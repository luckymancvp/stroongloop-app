var loopback = require('loopback');

module.exports = function(Todo) {
  Todo.me = function(msg, cb) {

    var ctx = loopback.getCurrentContext();
    var currentUser = ctx && ctx.get('currentUser');
    console.log('currentUser.username: ', currentUser.username);

    cb(null, 'Greetings... ' + msg);
  }

  Todo.remoteMethod(
    'me',
    {
      http: {path: '/me', verb: 'get'},
      accepts: {arg: 'msg', type: 'string'},
      returns: {arg: 'greeting', type: 'string'}
    }
  );
};

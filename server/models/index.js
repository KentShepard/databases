var db = require('../db');

var queryRequest = function (queryStr,params,callback) {
      db.query(queryStr, params, function(err, results) {
        if(err) {
          console.log('Error --> ',err);
          return;
        }
        callback(null, results);
      });
}


module.exports = {
  messages: {
    get: function (callback) {
        db.query('SELECT * FROM messages', function (error, results, fields) {
        if (error) throw error;
       // console.log('Messages: ', results);
        callback(null, results);
      });

    }, // a function which produces all the messages
    post: function (params, callback) {
      db.query('select ID from users where Username = ? limit 1',params[0],function(err,data) {
        if (err) {
          return;
        }
        params[0] = data[0].ID;
      var queryStr = 'insert into messages(UserID,Roomname,Message) values (?,?,?)';
        queryRequest(queryStr,params,function (err,results) {
        callback(null, results);
      });
      });
    }
  },

  users: {
    get: function () {

    },
    post:  function (params, callback) {
      var queryStr = 'insert into users(Username) values (?)';
      queryRequest(queryStr,params,function (err,results) {
        callback(null, results);
      });
    }
  }
};


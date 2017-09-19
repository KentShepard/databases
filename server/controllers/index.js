var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data) {
        //console.log('Data --> ', data);
        res.end(data);
      });
    },
    post: function (req, res) {
      var params = [req.body.username, req.body.roomname,req.body.message];
      models.messages.post(params,function(err,results) {
        if(err) {
          console.log('Err --> ',err);
          return ;
        }
        res.sendStatus(201);
      })
      //console.log('Messages post is invoked', req);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }
  }
};


'use strict';


var mongoose = require('mongoose'),
  Test = mongoose.model('Tests');

exports.list_all_test = function(req, res) {
  Test.find({}, function(err, test) {
    if (err)
      res.send(err);
    res.json(test);
  });
};

exports.create_a_test = function(req, res) {
  var new_test = new Test(req.body);
  new_test.save(function(err, test) {
    if (err)
      res.send(err);
    res.json(test);
  });
};

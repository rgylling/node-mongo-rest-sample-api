'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/testController');

  // todoList Routes
  app.route('/tests')
    .get(todoList.list_all_test)
    .post(todoList.create_a_test);
};

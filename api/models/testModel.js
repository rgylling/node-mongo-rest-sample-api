'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TestSchema = new Schema({
  name: {
    type: String,
    required: 'Enter Name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tests', TestSchema);

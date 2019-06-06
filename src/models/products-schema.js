'use strict'

const mongoose = require('mongoose');

const beaches = mongoose.Schema({
  beach_name: {type:String, required:true},
  airport_code: {type:String, required:true, uppercase:true, enum: ['OCI', 'MBJ', 'KIN']},
  resort_name: {type:String, required:true},
});

beaches.pre('save', function() {
  this.airport_code = this.airport_code.toUpperCase();
});

module.exports = mongoose.model('beaches', beaches);
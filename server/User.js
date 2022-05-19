const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create Schema
const test1Schemas = new Schema({
  
  time: {
    type: String,
    required: true,
  },
  dist: {
    type: Number,
    required: true,
  }



});

module.exports = Test1Schema = mongoose.model("test1", test1Schemas);
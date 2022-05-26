const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create Schema
const mq4Schemas = new Schema({
  
  title: {
    type: String,
    required: true,
  },
  stat: {
    type: String,
    required: true,
  }



});

module.exports = Mq4Schema = mongoose.model("statusmq4", mq4Schemas);
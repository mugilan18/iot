const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create Schema
const mq7Schemas = new Schema({
  
  title: {
    type: String,
    required: true,
  },
  stat: {
    type: String,
    required: true,
  }



});

module.exports = Mq7Schema = mongoose.model("statusmq7", mq7Schemas);
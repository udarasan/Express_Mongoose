const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  uid: String,
  name: String,
  password:String
});

module.exports = mongoose.model("users", usersSchema);
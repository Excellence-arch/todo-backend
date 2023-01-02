const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
  firstname: String,
  lastname: String,
});

const UserModel = mongoose.model("users_tbs", UserSchema);

module.exports = UserModel;

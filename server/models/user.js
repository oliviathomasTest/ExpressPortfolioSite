let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    address: String,
  },
  {
    collection: "user",
  }
);

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);

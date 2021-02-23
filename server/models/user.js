/* models/user.js   Olivia Thomas  (301146636)  23-02-2021 */
//User schema model
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

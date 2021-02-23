/* models/contacts.js   Olivia Thomas  (301146636)  23-02-2021 */
//Contacts schema model
let mongoose = require("mongoose");

let contactsSchema = new mongoose.Schema(
  {
    name: String,
    number: Number,
    email: String,
  },
  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("Contacts", contactsSchema);



var mongoose = require('mongoose');

var contactsSchema = new mongoose.Schema(
    {
	name : String,
	number : Number,
    email : String
},
{
    collection:"contacts"
}
);

module.exports = mongoose.model("Contacts",contactsSchema);
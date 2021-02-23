/* controllers/business_contacts.js   Olivia Thomas  (301146636)  23-02-2021 */
let express = require("express");
let router = express.Router();
let contacts = require("../models/contacts");

// Display Business Contacts page (Sorted list by names)
module.exports.displayBusinessContacts = (req, res, next) => {
  contacts
    .find({})
    .sort({ name: 1 })
    .then((contactList) => {
      res.render("buisness_contacts/contact_list", {
        title: "Business Contacts",
        contactList: contactList,
      });
    });
};

//Display  Update view
module.exports.displayEditPage = (req, res, next) => {
  contacts.findById(req.params.id, (err, foundContact) => {
    if (err) {
      console.log(err.message);
      res.end(err);
    } else {
      res.render("buisness_contacts/update", {
        title: "Update",
        contact: foundContact,
      });
    }
  });
};

// Update View Post route
module.exports.updateContactPostRoute = (req, res, next) => {
  let id = req.params.id;
  contacts.updateOne({ _id: id }, req.body.updated, (err, updatedContact) => {
    if (err) {
      console.log(err.message);
      res.end(err);
    } else {
      res.redirect("/business-contacts");
    }
  });
};

//Delete contact GET route
module.exports.deleteContactRoute = (req, res, next) => {
  let id = req.params.id;
  contacts.remove({ _id: id }, (err, deletedContact) => {
    if (err) {
      console.log(err.message);
      res.end(err);
    } else {
      console.log(deletedContact);
      res.redirect("/business-contacts");
    }
  });
};

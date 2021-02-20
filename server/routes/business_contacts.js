let express = require("express");
let router = express.Router();
let contacts = require("../models/contacts");
let contactsController = require("../controllers/business_contacts");

router.get("/", isLoggedIn, contactsController.displayBusinessContacts);

router.get("/edit/:id", contactsController.displayEditPage);

router.post("/edit/:id", contactsController.updateContactPostRoute);

router.get("/delete/:id", contactsController.deleteContactRoute);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;

/* routes/business_contacts.js   Olivia Thomas  (301146636)  23-02-2021 */
let express = require("express");
let router = express.Router();
let contacts = require("../models/contacts");
let contactsController = require("../controllers/business_contacts");

//Business Contacts GET Route
router.get("/", contactsController.displayBusinessContacts);

//Edit Contact GET route
router.get("/edit/:id", contactsController.displayEditPage);

//Edit Contact POST route
router.post("/edit/:id", contactsController.updateContactPostRoute);

//Delete Contact GET route
router.get("/delete/:id", contactsController.deleteContactRoute);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;

/* routes/index.js   Olivia Thomas  (301146636)  03-02-2021 */ 
var express = require("express");
var router = express.Router();

/* Home Routes */
router.get("/", (req, res) => {
  res.render("index", {title : 'Home'});
  
});


router.post("/", (req, res) => {
  const firstname = req.body.ifirstname;
  const lastname = req.body.ilastname;
  const email = req.body.iemail;
  const message = req.body.imessage;

  console.log(firstname, lastname, email, message);

  res.render("submit",{title:'Submit',firstname, lastname,isDisplay : 'true'});
});

/* Sumbit Route */
router.get("/submit", (req, res,next) => {
  res.render("submit",{title:'Submit',isDisplay : 'false'});
  console.log("reached submit");
});

router.post("/submit", (req, res,next) => {
  console.log("back to home");
  res.redirect("/");
});

/* Projects Route */
router.get("/projects", (req, res,next) => {
  res.render("projects",{title : 'Projects'});
});

/* Services Route */
router.get("/services", (req, res,next) => {
  res.render("services",{title : 'Services'});
});

/* Contact Route */
router.get("/contact", (req, res,next) => {
  res.render("contact", {title : 'Contact'});
});

/* about Route */
router.get("/about", (req, res,next) => {
  res.render("about",{title : 'About'});
});

/* Error Route */
router.get("/error", (req, res) => {
  res.render("error",{title:'Error'});
});

module.exports = router;

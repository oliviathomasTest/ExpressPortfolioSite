var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {title : 'Home'});
  
});

router.post("/", (req, res) => {
  const firstname = req.body.ifirstname;
  const lastname = req.body.ilastname;

  const email = req.body.iemail;
  const message = req.body.imessage;

  console.log(firstname, lastname, email, message);

  res.redirect("/submit");
});

router.get("/submit", (req, res,next) => {
  res.render("submit",{title:'Submit'});
  console.log("reached submit");
});

router.post("/submit", (req, res,next) => {
  console.log("back to home");
  res.redirect("/");
});

router.get("/projects", (req, res,next) => {
  res.render("projects",{title : 'Projects'});
});

router.get("/services", (req, res,next) => {
  res.render("services",{title : 'Services'});
});

router.get("/contact", (req, res,next) => {
  res.render("contact", {title : 'Contact'});
});

router.get("/about", (req, res,next) => {
  res.render("about",{title : 'About'});
});

router.get("/error", (req, res) => {
  res.render("error",{title:'Error'});
});

module.exports = router;

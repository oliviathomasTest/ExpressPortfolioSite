var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  const firstname = req.body.ifirstname;
  const lastname = req.body.ilastname;

  const email = req.body.iemail;
  const message = req.body.imessage;

  console.log(firstname, lastname, email, message);

  res.redirect("/submit");
});

router.get("/submit", (req, res) => {
  res.render("submit");
  console.log("reached submit");
});

router.post("/submit", (req, res) => {
  console.log("back to home");
  res.redirect("/");
});

router.get("/projects", (req, res) => {
  res.render("projects");
});

router.get("/services", (req, res) => {
  res.render("services");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;

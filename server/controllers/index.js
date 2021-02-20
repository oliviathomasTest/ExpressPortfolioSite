let express = require("express");
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
  res.render("content/index", { title: "Home" });
};

module.exports.homePagePostRoute = (req, res, next) => {
  const firstname = req.body.ifirstname;
  const lastname = req.body.ilastname;
  const email = req.body.iemail;
  const message = req.body.imessage;
  console.log(firstname, lastname, email, message);
  res.render("content/submit", {
    title: "Submit",
    firstname,
    lastname,
    isDisplay: "true",
  });
};

module.exports.displaySubmitPage = (req, res, next) => {
  res.render("content/submit", { title: "Submit", isDisplay: "false" });
  console.log("reached submit");
};

module.exports.SubmitPagePostRoute = (req, res, next) => {
  console.log("back to home");
  res.redirect("/");
};

module.exports.displayProjectsPage = (req, res, next) => {
  res.render("content/projects", { title: "Projects" });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render("content/services", { title: "Services" });
};

module.exports.displayContactsPage = (req, res, next) => {
  res.render("content/contact", { title: "Contact" });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render("content/about", { title: "About" });
};

module.exports.displayErrorPage = (req, res) => {
  res.render("errors/404", { title: "Error" });
};

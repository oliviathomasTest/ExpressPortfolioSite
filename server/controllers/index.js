/* controllers/index.js   Olivia Thomas  (301146636)  23-02-2021 */
let express = require("express");
let router = express.Router();

//display home page
module.exports.displayHomePage = (req, res, next) => {
  res.render("content/index", { title: "Home" });
};

//Home page POST route
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

//display submit page
module.exports.displaySubmitPage = (req, res, next) => {
  res.render("content/submit", { title: "Submit", isDisplay: "false" });
  console.log("reached submit");
};

//submit page post route
module.exports.SubmitPagePostRoute = (req, res, next) => {
  console.log("back to home");
  res.redirect("/");
};

//display projects page
module.exports.displayProjectsPage = (req, res, next) => {
  res.render("content/projects", { title: "Projects" });
};

//display services page
module.exports.displayServicesPage = (req, res, next) => {
  res.render("content/services", { title: "Services" });
};

//display contacts page
module.exports.displayContactsPage = (req, res, next) => {
  res.render("content/contact", { title: "Contact" });
};

//display about page
module.exports.displayAboutPage = (req, res, next) => {
  res.render("content/about", { title: "About" });
};

//display error page
module.exports.displayErrorPage = (req, res) => {
  res.render("errors/404", { title: "Error" });
};

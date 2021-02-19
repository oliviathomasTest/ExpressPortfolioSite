let express = require("express");
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render("content/index", {title : 'Home'});  
  };

module.exports.homePagePostRoute = (req, res, next) => {
    const firstname = req.body.ifirstname;
    const lastname = req.body.ilastname;
    const email = req.body.iemail;
    const message = req.body.imessage;
  
    console.log(firstname, lastname, email, message);
  
    res.render("content/submit",{title:'Submit',firstname, lastname,isDisplay : 'true'});
  };
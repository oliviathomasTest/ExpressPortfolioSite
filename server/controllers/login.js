/* controllers/login.js   Olivia Thomas  (301146636)  23-02-2021 */
let express = require("express");
let router = express.Router();
let passport = require('passport');
let mongoose = require('mongoose');
let user = require('../models/user');

//display login form
module.exports.displayLoginPage = (req, res,next) => {
    
    res.render("login/login_page",{title :'Login'});
};

//login POST route
module.exports.loginPagePostRoute =  passport.authenticate("local",{
    successRedirect : "/business-contacts",
    failureRedirect : "/login"
  }),function(req,res){

  };

//logout route
module.exports.logOutRoute = (req,res) => {
    req.logout();
    res.redirect("/");
  };
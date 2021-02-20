let express = require("express");
let router = express.Router();
let passport = require('passport');
let mongoose = require('mongoose');
let user = require('../models/user');

module.exports.displayLoginPage = (req, res,next) => {
    
    res.render("login/login_page",{title :'Login'});
};

module.exports.loginPagePostRoute =  passport.authenticate("local",{
    successRedirect : "/business-contacts",
    failureRedirect : "/login"
  }),function(req,res){

  };

module.exports.logOutRoute = (req,res) => {
    req.logout();
    res.redirect("/");
  };
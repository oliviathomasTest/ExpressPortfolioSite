let express = require("express");
let passport = require('passport');
let router = express.Router();
let mongoose = require('mongoose');
let user = require('../models/user');


router.get("/login", (req, res) => {
    
    res.render("login/login",{title :'Login'});
});

  router.post("/login",passport.authenticate("local",{
    successRedirect : "/business-contacts",
    failureRedirect : "/login"
  }),function(req,res){

  });

  //logout
router.get("/logout",function(req,res){
  req.logout();
  res.redirect("/");
});

  function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
      return next();
    }
    res.redirect("/login");
  }

  module.exports = router;
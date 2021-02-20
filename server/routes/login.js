let express = require("express");
let passport = require("passport");
let router = express.Router();
let mongoose = require("mongoose");
let user = require("../models/user");
let loginController = require("../controllers/login");

router.get("/login", loginController.displayLoginPage);

router.post("/login", loginController.loginPagePostRoute);

//logout
router.get("/logout", loginController.logOutRoute);

module.exports = router;

/* routes/login.js   Olivia Thomas  (301146636)  23-02-2021 */
let express = require("express");
let passport = require("passport");
let router = express.Router();
let mongoose = require("mongoose");
let user = require("../models/user");
let loginController = require("../controllers/login");

//login GET route
router.get("/login", loginController.displayLoginPage);

//login POST route
router.post("/login", loginController.loginPagePostRoute);

//logout route
router.get("/logout", loginController.logOutRoute);

module.exports = router;

/* routes/index.js   Olivia Thomas  (301146636)  03-02-2021 */ 
let express = require("express");
let router = express.Router();
//let contacts = require('../models/contacts');
let indexController = require('../controllers/index');
/* Home Routes */
router.get("/", indexController.displayHomePage);


router.post("/",indexController.homePagePostRoute);

/* Sumbit Route */
router.get("/submit", (req, res,next) => {
  res.render("content/submit",{title:'Submit',isDisplay : 'false'});
  console.log("reached submit");
});

router.post("/submit", (req, res,next) => {
  console.log("back to home");
  res.redirect("/");
});

/* Projects Route */
router.get("/projects",isLoggedIn, (req, res,next) => {
  res.render("content/projects",{title : 'Projects'});
});

/* Services Route */
router.get("/services",isLoggedIn, (req, res,next) => {
  res.render("content/services",{title : 'Services'});
});

/* Contact Route */
router.get("/contact", (req, res,next) => {
  res.render("content/contact", {title : 'Contact'});
});

/* about Route */
router.get("/about", isLoggedIn,(req, res,next) => {
  res.render("content/about",{title : 'About'});
});


/* Error Route */
router.get("/error", (req, res) => {
  res.render("errors/404",{title:'Error'});
});

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}

module.exports = router;

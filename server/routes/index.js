/* routes/index.js   Olivia Thomas  (301146636)  23-02-2021 */
let express = require("express");
let router = express.Router();
let indexController = require("../controllers/index");
/* Home Routes */
router.get("/", indexController.displayHomePage);

router.post("/", isLoggedIn, indexController.homePagePostRoute);

/* Sumbit Route */
router.get("/submit", isLoggedIn, indexController.displaySubmitPage);

router.post("/submit", isLoggedIn, indexController.SubmitPagePostRoute);

/* Projects Route */
router.get("/projects", isLoggedIn, indexController.displayProjectsPage);

/* Services Route */
router.get("/services", isLoggedIn, indexController.displayServicesPage);

/* Contact Route */
router.get("/contact", isLoggedIn, indexController.displayContactsPage);

/* about Route */
router.get("/about", isLoggedIn, indexController.displayAboutPage);

/* Error Route */
router.get("/error", indexController.displayErrorPage);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;

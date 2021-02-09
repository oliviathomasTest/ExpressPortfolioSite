/* Main Entry : app.js  Olivia Thomas  (301146636)  03-02-2021 */ 
const express = require("express"),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  compress = require("compression"),
  session = require("express-session"),
  config = require("./config/env/development"),
  indexRoutes = require("./routes/index");

const app = express();

process.env.NODE_ENV = process.env.NODE_ENV || "development";
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else if (process.env.NODE_ENV === "production") {
  app.use(compress());
}

//Serving static files
app.use(express.static("./public"));

//Registering the middleware express-session
app.use(
  session({
    saveUninitialized: true,
    secret: config.sessionSecret,
    resave: true,
  })
);

// set the view engine to ejs
app.set("view engine", "ejs");

// Registering the index routes 
app.use(indexRoutes);

//Rerouting in case of non-existent routes
app.use((req, res, next) => {
  res.status(404).redirect('/error');
 })

 //Creates a Node.js web server at the specified port
app.listen(port, () =>
  console.log(`Express portfolio app listening on port ${port}!`)
);

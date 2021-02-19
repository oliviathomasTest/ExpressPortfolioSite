/* Main Entry : app.js  Olivia Thomas  (301146636)  03-02-2021 */ 
const express = require("express"),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  compress = require("compression"),
  session = require("express-session"),
  config = require("./server/config/env/development"),
  indexRoutes = require("./server/routes/index"),
  loginRoutes = require("./server/routes/login"),
  businessContactRoutes = require("./server/routes/business_contacts"),
  User = require("./server/models/user"),
  passport = require('passport'),
  methodOverride = require('method-override');

  

  let path = require('path');
  //database setup 
  let mongoose = require('mongoose');
  let DB = require("./server/config/db");

  const app = express();
   //point mongoose to the DB URI 
   mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/data', 
   {useNewUrlParser: true,
    useUnifiedTopology: true
  }); 
   let mongoDB= mongoose.connection;
    mongoDB.on('error', console.error.bind(console, 'Connection Error: ')); 
    mongoDB.once('open',()=>{ 
      console.log('Connected to mongoDB...'); 
    });



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
app.use(methodOverride("_method"));

//Registering the middleware express-session
app.use(
  session({
    saveUninitialized: false,
    secret: config.sessionSecret,
    resave: false
  })
);

 /* User.register({username:'paul', active: false}, 'paul');
 User.register({username:'jay', active: false}, 'jay');
 User.register({username:'roy', active: false}, 'roy'); */

  /* User.register({username:'olivia',email: 'foo@bar.com', address: '123mainstreet',active:false},'ols');  */

  
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function isLoggedIn(req,res,next){
  res.locals.user = req.user;
  next();
});
// set the view engine to ejs
app.set('views', path.join(__dirname, 'server/views'));
app.set("view engine", "ejs");

// Registering the routes 
app.use(indexRoutes);
app.use(loginRoutes);
app.use("/business-contacts",businessContactRoutes);

//Rerouting in case of non-existent routes
app.use((req, res, next) => {
  res.status(404).redirect('/error');
 })

 //Creates a Node.js web server at the specified port
app.listen(port, () =>
  console.log(`Express portfolio app listening on port ${port}!`)
);

var express = require("express");
var passport = require ("./config/passport");
var session = require("express-session");
var config = require("./config/extraconfig");

var PORT = process.env.PORT || 8080;

var app = express();

var db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var expBars = require("express-handlebars");

app.engine("handlebars", expBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var isAuth = require ("./config/middleware/isAuthenticated");
var authCheck = require ("./config/middleware/attachAuthenticationStatus");

app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

// var routes1 = require("./routes/user.js");
require('./routes.js')(app);



db.sequelize.sync().then(function () {
app.listen(PORT, function () {
    console.log("============================================" + "\nCLIENT: http://localhost:" + PORT);
    console.log("============================================" + "\nADMIN:  http://localhost:" + PORT + "/manage" 
    + "\n============================================" + "\nCONTACT:  http://localhost:" + PORT + "/contact" 
    + "\n============================================" + "\nINFO:  http://localhost:" + PORT + "/info" 
    + "\n============================================");
    });
});

module.exports = app;
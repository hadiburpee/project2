var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

var db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var expBars = require("express-handlebars");

app.engine("handlebars", expBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var routes1 = require("./routes/user.js");
require('./routes.js')(app);



db.sequelize.sync().then(function () {
app.listen(PORT, function () {
    console.log("============================================" + "\nCLIENT: http://localhost:" + PORT);
    console.log("============================================" + "\nADMIN:  http://localhost:" + PORT 
    + "/manage" + "\n============================================");
    });
});

module.exports = app;
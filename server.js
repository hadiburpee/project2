var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var expBars = require("express-handlebars");

app.engine("handlebars", expBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var routes1 = require("./routes/user.js");
require('./routes')(app);

// // app.use(routes1);
// app.use(routes2);

app.listen(PORT, function () {
    console.log("App now listening at http://localhost:" + PORT);
});

module.exports = app;
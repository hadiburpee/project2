var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var expBars = require("express-handlebars");

app.engine("handlebars", expBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/tax-controllers.js");

app.use(routes);


app.listen(PORT, function () {
    console.log("App now listening at http://localhost:" + PORT);
});
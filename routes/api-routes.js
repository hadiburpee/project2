// Requiring our Nexus database models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the rules
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM nexus_rules";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
//backend routes for administrator get and post request

var express = require("express");
var router = express.Router();

var managerController = require("../controllers/admin-controllers.js");

router.get('/', managerController.index);
console.log("admin route");

module.exports = router;
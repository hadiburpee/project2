//backend routes for administrator get and post request

var express = require("express");
var router = express.Router();

var adminController = require("../controllers/admin-controllers");

router.get('/admin', adminController.index);

module.exports = router;
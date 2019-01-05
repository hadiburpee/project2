var express = require("express");
var router = express.Router();

var contactController = require("../controllers/contact-controller");


router.get('/', contactController.contact);


module.exports = router; 
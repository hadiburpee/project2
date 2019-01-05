var express = require("express");
var router = express.Router();

var infoController = require("../controllers/info-controller");


router.get('/', infoController.info);


module.exports = router; 
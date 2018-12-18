var express = require("express");
var router = express.Router();

var clientController = require("../controllers/client-controller");

router.post('/', clientController.addUser);

module.exports = router;
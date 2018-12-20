var express = require("express");
var router = express.Router();

var clientController = require("../controllers/client-controller");

// var userController = require("../controllers/user-controllers.js");

router.get('/', clientController.index);

//uses admin model to check state and transaction threshold
router.get('/rules/:state', clientController.nexusCheck);

router.post('/addUser', clientController.addUser);

module.exports = router;
//backend routes for administrator get and post request

var express = require("express");
var router = express.Router();

var managerController = require("../controllers/admin-controllers.js");

router.get('/', managerController.manage);
router.get('/viewRules', managerController.rules);
router.get('/viewClients', managerController.clients);

console.log("admin route");

router.post('/', managerController.addRule);

module.exports = router;
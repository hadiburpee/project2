//backend routes for administrator get and post request

var express = require("express");
var router = express.Router();
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

var managerController = require("../controllers/admin-controllers.js");

router.get('/', managerController.manage);
router.get('/viewRules', managerController.rules);
router.get('/viewClients', managerController.clients);
router.get('/sign-out', managerController.signOutAdministrator);

//post for admin login
router.post('/login', passport.authenticate("local"), managerController.loginAdministrator);
router.post('/', managerController.addRule);

module.exports = router;
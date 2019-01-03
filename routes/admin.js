//backend routes for administrator get and post request

var express = require("express");
var router = express.Router();
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

var managerController = require("../controllers/admin-controllers.js");


// GET route /manage
router.get('/', managerController.manage);
router.get('/viewRules', managerController.rules);
router.get('/viewClients', managerController.clients);
router.get('/sign-out', managerController.signOutAdministrator);
router.get('/signUp', managerController.registrationPage)

// POST route /manage
router.post('/signUp', managerController.signUpAdmin);
router.post('/login', passport.authenticate("local"), managerController.loginAdministrator);



// POST route /newRule
router.post('/', managerController.addRule);
router.put('/', managerController.updateRule);

module.exports = router;
//backend route for user get and post routes
var express = require("express");
var router = express.Router();

var userController = require("../controllers/user-controllers.js");

router.get('/', user-controller.index);
// router.get('/admin', userController.admin);[]

router.get('/rules', user-controller.registrationPage);
console.log("user route")


module.exports = router;

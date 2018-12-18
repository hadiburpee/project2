//backend route for user get and post routes
var express = require("express");
var router = express.Router();

var userController = require("../controllers/user-controllers.js");

router.get('/', userController.index);
// router.get('/admin', userController.admin);




module.exports = router;

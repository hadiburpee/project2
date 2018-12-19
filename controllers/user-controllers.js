//route for page controllers

var db  = require('../models');

exports.index = function(req, res) {
    res.render('index');
};
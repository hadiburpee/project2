var db = require("../models");


exports.addUser = function (req, res) {

    db.Post.create({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        email: req.body.email,
        state: req.body.state,
        trans: req.body.trans,
        sales: req.body.sales
    }).then(function(dbPost) {
        res.json(dbPost);
    });
};
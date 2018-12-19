var db = require("../models");


exports.addUser = function (req, res) {

    db.newClient.create({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        email: req.body.email,
        state: req.body.state,
        trans: req.body.trans,
        sales: req.body.sales
    }).then(function(dbnewClient) {
        res.json(dbnewClient);
    });
};
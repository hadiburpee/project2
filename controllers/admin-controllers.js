//routes for admin controllers
var db = require("../models");

exports.index = function(req,res){
    console.log("admin controller");
    res.render('manager/manage');

};


exports.addRule = function (req, res) {
    console.log("Add rule hit");

    db.nexus_rules.create({
        state_name: req.body.state,
        transaction: req.body.trans,
        sales: req.body.sales
    }).then(function(dbnewClient) {
        res.json(dbnewClient);
    });
};




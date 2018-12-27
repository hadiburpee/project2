//routes for admin controllers
var db = require("../models");

exports.manage = function(req,res){
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

exports.rules = function (req, res) {
    db.nexus_rules.findAll({
        state_name: req.body.state,
        transaction: req.body.transaction,
        sales: req.body.sales
    }).then(function(dbRules) {
        res.json(dbRules);
        // res.render('manage/rules')
    });
}

// GET function to return all client info from db
exports.clients = function(req, res) {
    db.newclients.findAll({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        email: req.body.email
    }).then(function(dbnewClient) {
        console.log(dbnewClient);
        res.json(dbnewClient);
    });
}

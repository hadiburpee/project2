var db = require("../models");

//load homepage
exports.index = function(req, res) {
    res.render('index');
};


//new client create request to store information

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

//new client search request to compare state tax thresholds

exports.nexusCheck = function(req, res) {
    var state = req.params.state;
    console.log(state);
    
    db.nexus_rules.findAll({
        where:{
            state_name: state
        }
    }).then(function(dbNexusCheck){
        res.json(dbNexusCheck);
    });
};
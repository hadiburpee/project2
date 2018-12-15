var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    
    // var hbsObject = {
    //     taxUser: 1
    // };
    // console.log(hbsObject); 
    
    res.render("index");
    

});

module.exports = router;

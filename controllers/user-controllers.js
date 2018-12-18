//route for page controllers

exports.index = function(req,res){
    console.log("user controller");
    res.render('index.handlebars');
};


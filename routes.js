module.exports = function(app){
    const adminPage = require("./routes/admin");
    const user = require("./routes/user");


    app.use('/admin', adminPage);
    app.use('/', user);


}
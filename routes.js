

module.exports = function(app){

    const adminPage = require("./routes/admin");
    const user = require("./routes/user");
    const newClient = require("./routes/client");


    app.use('/', user);
    app.use('/admin', adminPage);
    app.use('/client', newClient);


}
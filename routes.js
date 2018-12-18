

module.exports = function(app){

    const managePage = require("./routes/admin");
    const user = require("./routes/user");
    const newClient = require("./routes/client");



    app.use('/manage', managePage);
    app.use('/', user);
    app.use('/client', newClient);


}
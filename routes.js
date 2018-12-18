module.exports = function(app){
    const managePage = require("./routes/admin");
    const user = require("./routes/user");


    app.use('/manage', managePage);
    app.use('/', user);


}
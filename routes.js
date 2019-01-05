

module.exports = function(app){

    const managePage = require("./routes/admin");
    const newClient = require("./routes/client");
    const contactPage = require("./routes/contact");
    const infoPage = require("./routes/info");
    

    app.use('/manage', managePage);
    app.use('/newRule', managePage);
    app.use('/', newClient);
    app.use('/client', newClient);
    app.use('/updateRule', managePage);
    app.use('/contact', contactPage);
    app.use('/info', infoPage);

}
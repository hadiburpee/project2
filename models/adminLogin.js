'use strict';
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    var administrator = sequelize.define('administrator', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {

    hooks: {
        beforeCreate: function(administrator, options){
            administrator.password = bcrypt.hashSync(administrator.password, bcrypt.genSaltSync(10), null);
        }
    }
    });
    administrator.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    }
    return administrator;
};
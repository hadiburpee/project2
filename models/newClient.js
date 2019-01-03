module.exports = function (sequelize, DataTypes) {
    
    var newClient = sequelize.define("newClient", {
        state: {
            type:  DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        firstName: {
            type:  DataTypes.STRING,
            allowNull: false,
        },
        secondName: {
            type:  DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type:  DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        trans: {
            type:  DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 11]
            }
        },
        sales: {
            type:  DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 11]
            }
        },
    });
    return newClient;
};
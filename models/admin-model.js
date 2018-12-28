module.exports = function (sequelize, DataTypes) {
    
    var nexus_rules = sequelize.define("nexus_rules", {
        state_name: {
            type:  DataTypes.STRING,
            allowNull: false,
        },
        transaction: {
            type:  DataTypes.INTEGER,
            allowNull: false,
        },
        sales: {
            type:  DataTypes.INTEGER,
            allowNull: false,
        },
        both_criteria: {
            type:  DataTypes.STRING,
            allowNull: false,
            defaultValue: "either"
        }
    });
    return nexus_rules;

    var newClient = sequelize.define("newClients", {
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
        }
    });
    return newClient;
};
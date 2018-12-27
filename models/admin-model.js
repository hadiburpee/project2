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
        both_critera: {
            type:  DataTypes.STRING,
            allowNull: false,
        }
    });
    return nexus_rules;
};
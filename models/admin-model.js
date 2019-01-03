module.exports = function (sequelize, DataTypes) {
    
    var nexus_rules = sequelize.define("nexus_rules", {
        state_name: {
            type:  DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
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
    
};

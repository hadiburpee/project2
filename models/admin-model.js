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
        }
        // state: {
        //     type:  DataTypes.STRING,
        //     allowNull: false,
        // },
        // trans: {
        //     type:  DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         len: [1, 11]
        //     }
        // },
        // sales: {
        //     type:  DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         len: [1, 11]
        //     }
        // },
    });
    return nexus_rules;
};
module.exports = function (sequelize, DataTypes) {
    
    var Post = sequelize.define("Post", {
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
        state: {
            type:  DataTypes.STRING,
            allowNull: false,
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
    return Post;
};
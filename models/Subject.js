const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const Subject = sequelize.define("Subject", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    credits:{
        type: DataTypes.INTEGER,
        allowNull: false,

    },
},{
    timestamps: false
});
module.exports =Subject;
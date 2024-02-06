const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const Teacher = sequelize.define("Teacher",{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: false,
});
module.exports = Teacher;
const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const Student = sequelize.define("Student",{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    timestamps: false,
});

module.exports = Student;
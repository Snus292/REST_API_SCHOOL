const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const Lesson = sequelize.define("Lesson",{
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    duration:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    timestamps: false,
});

module.exports = Lesson;

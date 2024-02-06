const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const Group = sequelize.define("Group",{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    subject:{
        type: DataTypes.STRING,
        allowNull: false,
    },

},{
    timestamps: false,
});
module.exports = Group;
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("school", "school", "school",{
    host: "localhost",
    dialect: "mysql",
    timestamps: false,
    define: {
        freezeTableName: true,
    },
});

module.exports = sequelize;


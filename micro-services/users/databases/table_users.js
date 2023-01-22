const { DataTypes } = require("sequelize");

function createUsers(sequelize) {
  return sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      passwordHash: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      rol: {
        type: DataTypes.STRING(8),
        allowNull: false,
        defaultValue: "user",
      },
      deleteUser: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
}

module.exports = createUsers;

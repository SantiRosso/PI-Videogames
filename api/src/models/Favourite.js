const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "favourite",
    {
      gameId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

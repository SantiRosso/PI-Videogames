const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "favourite",
    {
      idGame: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};

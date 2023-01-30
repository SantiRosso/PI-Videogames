const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "review",
    {
      title: {
        type: DataTypes.STRING,
      },
      comment: {
        type: DataTypes.TEXT,
      },
      score: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: true }
  );
};

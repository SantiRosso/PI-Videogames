const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "comment",
    {
      userId: {
        type: DataTypes.INTEGER,
      },
      //así o con relación?
      gameId: {
        type: DataTypes.INTEGER,
      },
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

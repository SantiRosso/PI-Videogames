const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "review",
    {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      sex: {
        type: DataTypes.STRING,
      },
      favGenre: {
        type: DataTypes.STRING,
      },
      favPlatform: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: true }
  );
};

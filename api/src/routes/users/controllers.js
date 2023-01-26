const { User } = require("../../db.js");

const getUsers = async () => {
  try {
    let result = await User.findAll();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getUsers };

const { Op } = require("sequelize");
const { User } = require("../../db.js");

const getUsers = async () => {
  try {
    let result = await User.findAll();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const createUser = async (
  name,
  email,
  password,
  image,
  country,
  age,
  sex,
  favGenre,
  favPlatform
) => {
  try {
    let allUsers = await getUsers();
    allUsers.map((e) => {
      if (e.name === name) {
        return res.send({ message: "error name" });
      }
      if (e.email === email) {
        return res.send({ message: "error email" });
      }
    });
    // let [user, boolean] = await User.findOrCreate({
    //   where: {
    //     [Op.or]: [{ name: name }, { email: email }],
    //   },
    // });
    // if (!boolean) {
    //   return res.send({ message: "error" });
    // }

    //encriptar, validar email(nodemailer)

    await User.create({
      name,
      email,
      password,
      image,
      country,
      age,
      sex,
      favGenre,
      favPlatform,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const updateUser = async (
  id,
  name,
  email,
  password,
  image,
  country,
  age,
  sex,
  favGenre,
  favPlatform
) => {
  try {
    let user = await User.findOne({
      where: {
        id,
      },
    });

    user.name = name;
    user.email = email;
    user.password = password;
    user.image = image;
    user.country = country;
    user.age = age;
    user.sex = sex;
    user.favGenre = favGenre;
    user.favPlatform = favPlatform;
    user.save();
  } catch (error) {
    throw new Error(error);
  }
};

const deleteUser = async (id) => {
  try {
    await User.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };

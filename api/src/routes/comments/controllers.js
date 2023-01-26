const { Comment } = require("../../db.js");

const getComments = async (gameId) => {
  try {
    let result = await Comment.findAll({
      where: {
        gameId,
      },
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const postComment = async (gameId, userId, title, comment, score) => {
  try {
    await Comment.create({
      gameId,
      userId,
      title,
      comment,
      score,
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getComments, postComment };

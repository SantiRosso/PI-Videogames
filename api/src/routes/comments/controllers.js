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

const updateComment = async (id, title, comment, score) => {
  try {
    let newComment = await Comment.findOne({
      where: {
        id,
      },
    });
    newComment.title = title;
    newComment.comment = comment;
    newComment.score = score;
    newComment.save();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getComments, postComment, updateComment };

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
    // let user = User.findOne();
  } catch (error) {
    throw new Error(error);
  }
};

const updateComment = async (id, title, comment, score) => {
  try {
    let newComment = await Comment.findOne({
      where: {
        id,
        userId,
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

const deleteComment = async (id, userId) => {
  try {
    await Comment.destroy({
      where: {
        id,
        userId,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getComments, postComment, updateComment, deleteComment };

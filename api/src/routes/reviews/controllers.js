const { Review, User } = require("../../db.js");

const getReviews = async () => {
  try {
    let result = await Review.findAll({
      include: {
        model: User,
        attributes: ["name"],
      },
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
const postReview = async (userId, title, comment, score) => {
  try {
    await Review.findOrCreate({
      where: {
        userId,
        title,
        comment,
        score,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
const deleteReview = async (id) => {
  try {
    await Review.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
const updateReview = async (id, title, comment, score) => {
  try {
    let review = await Review.findOne({
      where: {
        id,
      },
    });
    review.title = title;
    review.comment = comment;
    review.score = score;
    await review.save();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getReviews, postReview, deleteReview, updateReview };

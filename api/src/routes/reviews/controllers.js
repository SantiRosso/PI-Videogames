const { Review } = require("../../db.js");

const getReviews = async () => {
  try {
    let result = await Review.findAll();
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
const deleteReview = async () => {};
const updateReview = async () => {};

module.exports = { getReviews, postReview, deleteReview, updateReview };

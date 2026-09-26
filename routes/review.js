const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/expressError.js");
const Review = require("../models/review.js");
const { listingSchema, reviewSchema } = require("../utils/schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isReviewOwner } = require("../utils/middleware.js");
const reviewController = require("../controllers/reviews.js");

const validateReview = (req, res, next) => {
  let { err } = reviewSchema.validate(req.body);
  if (err) {
    throw new expressError(404, err);
  } else {
    next();
  }
};

//Post route for review
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview),
);

// Delete review
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewOwner,
  wrapAsync(reviewController.deleteReview),
);

module.exports = router;

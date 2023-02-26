const reviewRouter = require('express').Router();
const { Review } = require('../db');

// GET /api/reviews
reviewRouter.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
});

module.exports = reviewRouter;

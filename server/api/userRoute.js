const userRoute = require('express').Router();
const { User } = require('../db');
const { requireAuth } = require('../middleware/authMiddleware');

// Middleware to restrict endpoint to only admin users
const requireAdmin = (req, res, next) => {
  if (req.user.role === 'ADMIN') {
    next();
  } else {
    res.status(403).send({ message: 'Forbidden' });
  }
};

// GET /api/users
userRoute.get('/', requireAuth, requireAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
    res.status(200).send(users);
  } catch (err) {
    console.log('Error: ', err);
    next(err);
  }
});

module.exports = userRoute;

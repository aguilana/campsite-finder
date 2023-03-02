const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User } = require('../../db');
const { requireAuth, isAdmin } = require('../../middleware/authMiddleware');
require('dotenv').config();

// START
// local authentication route
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  (req, res, next) => {
    try {
      const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET);
      console.log('TOKEN IS: ', token);
      res.json({ token });
    } catch (err) {
      res.status(500).json({ err: err.message });
    }
  }
);

// JWT authentication route
router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      res.json(req.user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);
// END

// POST /api/auth/signup
router.post('/signup', async (req, res, next) => {
  try {
    const userExists = await User.findOne({
      where: { email: req.body.email },
    });
    if (userExists) {
      res.status(401).json('User already exists');
    } else if (req.body.role && req.body.role !== 'CUSTOMER') {
      // Check if role is provided and is CUSTOMER
      res
        .status(400)
        .json('Invalid role provided. Only CUSTOMER role is allowed');
    } else {
      // Create a new user
      const newUser = await User.create({
        ...req.body,
        role: 'CUSTOMER',
      });
      const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
      res.json({ token });
    }
  } catch (err) {
    next(err);
  }
});

router.post('/signup/admin', requireAuth, isAdmin, async (req, res, next) => {
  try {
    // create a new user with admin privileges
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      role: 'ADMIN',
    });
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

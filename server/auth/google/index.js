// Google authentication route
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const {
  googleAuth,
  googleAuthCallback,
} = require('../../middleware/authMiddleware');
require('dotenv').config();

// auth/google
router.get('/', googleAuth);

// Google authentication callback route
// auth/google/callback
router.get('/callback', googleAuthCallback, (req, res) => {
  try {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET);
    console.log('TOKEN IS: ', token);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;

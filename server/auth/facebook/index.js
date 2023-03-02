// Facebook authentication callback route
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const {
  facebookAuth,
  facebookAuthCallback,
} = require('../../middleware/authMiddleware');
require('dotenv').config();

// Facebook authentication route
// auth/facebook
router.get('/', facebookAuth);

// auth/facebook/callback
router.get('/callback', facebookAuthCallback, (req, res) => {
  try {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET);
    console.log('TOKEN IS: ', token);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;

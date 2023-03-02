const passport = require('passport');
const { User } = require('../db');

// Middleware function to require a valid JWT token for protected routes
const requireAuth = passport.authenticate('jwt', { session: false });
const googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});
const googleAuthCallback = passport.authenticate('google', { session: false });
const facebookAuth = passport.authenticate('facebook', { scope: ['email'] });
const facebookAuthCallback = passport.authenticate('facebook', {
  session: false,
});

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send('Access denied');
    }
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};

module.exports = {
  requireToken,
  requireAuth,
  googleAuth,
  googleAuthCallback,
  facebookAuth,
  facebookAuthCallback,
  isAdmin,
};

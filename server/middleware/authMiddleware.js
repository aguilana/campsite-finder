const passport = require('passport');

// Middleware function to require a valid JWT token for protected routes
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = {
  requireAuth,
};

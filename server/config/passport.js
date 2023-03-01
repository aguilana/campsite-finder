const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { User } = require('../db');
require('dotenv').config();

console.log('process.env in passport', process.env.JWT_SECRET);
// Local authentication strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });
        const passwordsMatch = await user.correctPassword(password);

        if (!user) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }
        if (passwordsMatch) {
          return done(null, user);
        }
        return done(null, false, { message: 'Incorrect email or password.' });
      } catch (err) {
        done(err);
      }
    }
  )
);

// jwt authentication strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
    try {
      console.log('jwt_payload', jwt_payload);
      // find user by id
      const user = await User.findByPk(jwt_payload.id);

      // if user exists, return user object with done() else return false
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (err) {
      done(err, false);
    }
  })
);

module.exports = passport;

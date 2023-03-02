const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const { User } = require('../db');
require('dotenv').config();

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
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
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

/* google auth */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const [user, created] = await User.findOrCreate({
          where: { googleId: profile.id },
          defaults: {
            email: profile.emails[0].value,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
          },
        });

        if (created) {
          console.log('New user created');
        } else {
          console.log('Existing user found');
        }

        done(null, user);
      } catch (err) {
        done(err, false);
      }
    }
  )
);

// facebook auth
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'email', 'name'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const [user, created] = await User.findOrCreate({
          where: { facebookId: profile.id },
          defaults: {
            email: profile.emails[0].value,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
          },
        });

        if (created) {
          console.log('New user created');
        } else {
          console.log('Existing user found');
        }

        done(null, user);
      } catch (err) {
        done(err, false);
      }
    }
  )
);

module.exports = passport;
